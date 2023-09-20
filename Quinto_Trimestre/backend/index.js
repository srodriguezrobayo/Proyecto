const express = require('express')
const mysql = require('mysql')
const bodyParser = require('body-parser')

const app = express()

app.use(function(req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', '*');
    res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next()
})

app.use(bodyParser.json())

const PUERTO = 9300

const conexion = mysql.createConnection(
    {
        host:'localhost',
        database:'project',
        user:'root',
        password:''
    }
)

app.listen(PUERTO, () => {
    console.log(`Servidor corriendo en el puerto ${PUERTO}`);
})

conexion.connect(error => {
    if(error) throw error
    console.log('Conexión exitosa a la base de datos');
})

app.get('/', (req, res) => {
    res.send('API')
})

app.post('/cliente/registro', (req, res) => {
    let { 
        Cliente_id_Cliente,Nombre_cliente,Correoelectronico_cliente,Password_cliente,Telefono_cliente,Genero_idGenero,Ciudad_id_Ciudad 
    } = req.body

    const query = `INSERT INTO cliente VALUES (${Cliente_id_Cliente}, '${Nombre_cliente}','${Correoelectronico_cliente}','${Password_cliente}',${Telefono_cliente},'${Genero_idGenero}','${Ciudad_id_Ciudad}')`
    conexion.query(query, (error) => {
        if(error) return console.error(error.message)

        res.json(`Cliente Agregado`)
    })
})


app.post('/cliente/login', (req, res) => {
    let   { 
        Correoelectronico_cliente,Password_cliente
    } = req.body

    const  query = `SELECT * FROM cliente WHERE Correoelectronico_cliente='${Correoelectronico_cliente}' AND Password_cliente=MD5('${Password_cliente}');`

    
    conexion.query(query, (error,resultado) => {
        if(error) return console.error(error.message)

        if(resultado.length > 0) {
            res.json('Bienvenido')
        } else {
            res.json(`No se encuentra`+' '+Correoelectronico_cliente)
        }
    })
})

app.post('/empresa/registro', (req, res) => {
    let { 
        Nit_Empresa,Nombre_empresa,Correoelectronico_empresa,Password_empresa,Telefono_empresa,Ciudad_id_Ciudad 
    } = req.body

    const query = `INSERT INTO empresa VALUES (${Nit_Empresa},'${Nombre_empresa}','${Correoelectronico_empresa}','${Password_empresa}',${Telefono_empresa},'${Ciudad_id_Ciudad}')`
    conexion.query(query, (error) => {
        if(error) return console.error(error.message)

        res.json(`Empresa Agregada`)
    })
})

app.post('/empresa/login', (req, res) => {
    let   { 
        Correoelectronico_empresa,Password_empresa
    } = req.body

    const  query = `SELECT * FROM empresa WHERE Correoelectronico_empresa='${Correoelectronico_empresa}' AND Password_empresa=MD5('${Password_empresa}');`

    
    conexion.query(query, (error,resultado) => {
        if(error) return console.error(error.message)

        if(resultado.length > 0) {
            res.json('Bienvenido')
        } else {
            res.json(`No se encuentra`+' '+Correoelectronico_empresa)
        }
    })
})

app.post('/admin/login', (req, res) => {
    let   { 
        Nom_empleado,Password_empleado
    } = req.body

    const  query = `SELECT * FROM empleados WHERE Nom_empleado = '${Nom_empleado}'  && Password_empleado = md5('${Password_empleado}');`

    
    conexion.query(query, (error,resultado) => {
        if(error) return console.error(error.message)

        if(resultado.length > 0) {
            res.json('Bienvenido')
        } else {
            res.json(`No se encuentra`+' '+Nom_empleado)
        }
    })
})


app.post('/reserva', (req, res) => {
    let { 
        Servicio_idServicio, Fecha_reservacion, Hora_reservacion, Lugar_reservacion_idLugar_reservacion, Empresa_Nit_Empresa, Cliente_N_Documento, Valor, Empleados_id_empleado
    } = req.body

    const query = `INSERT INTO reservacion VALUES (NULL, '${Servicio_idServicio}','${Fecha_reservacion}','${Hora_reservacion}','${Lugar_reservacion_idLugar_reservacion}', '${Empresa_Nit_Empresa}', '${Cliente_N_Documento}', '${Valor}', '${Empleados_id_empleado}')`
    conexion.query(query, (error) => {
        if(error) return console.error(error.message)

        res.json(`Reservacion exitosa`)
    })
})

//tipo usuario
app.get ('/tipo_usuario', (req, res)=> {
    const query = `SELECT * FROM tipo_usuario;`
    conexion.query (query, (error, resultado) => {
        if (error) return console.error (error.message)

        if(resultado.length > 0) {
            res.json(resultado)
        } else {
            res.json ('No hay registros')
        }
    })
})

app.get('/tipo_usuario/:id', (req, res) => {
    const { id } = req.params

    const query = `SELECT * FROM tipo_usuario WHERE idTipo_usuario = ${id};`
    conexion.query (query, (error, resultado) => {
        if (error) return console.error (error.message)

        if(resultado.length > 0) {
            res.json (resultado)
        }else{
            res.json ('No hay registros')
        }
    })
})

app.post ('/tipo_usuario/agregar',(req, res) => {
    const tipo_usuario = {
        Nombre_t_usuario: req.body.Nombre_t_usuario,
        estado: req.body.estado
    }
    
    const query = `INSERT INTO tipo_usuario SET ?`
    conexion.query(query, tipo_usuario, (error) =>{
        if (error) return console.error(error.message)

        res.json('Se inserto correctamente el tipo de usuario')
    })
})

app.put('/tipo_usuario/actualizar/:id', (req, res) => {
    const { id } = req.params;
    const { Nombre_t_usuario, estado } = req.body;

    const query = `UPDATE tipo_usuario SET Nombre_t_usuario = '${Nombre_t_usuario}', estado = '${estado}' WHERE idTipo_usuario = '${id}';`;
    conexion.query(query, (error) => {
        if (error) {
            console.error(error.message);
            res.status(500).json({ error: 'Hubo un error al actualizar el tipo de usuario' });
            return;
        }

        res.json('Se actualizó correctamente el tipo de usuario');
    });
});


app.delete('/tipo_usuario/borrar/:id', (req, res) => {
    const { id } = req.params;

    const query = `DELETE FROM tipo_usuario WHERE idTipo_usuario=${id};`;
    conexion.query(query, (error) => {
        if (error) {
            console.error(error.message);
            res.status(500).json({ error: 'Hubo un error al eliminar el tipo de usuario' });
            return;
        }

        res.json('Se eliminó correctamente el usuario');
    });
});

//empleado
app.get ('/empleado', (req, res)=> {
    const query = `SELECT * FROM empleados;`
    conexion.query (query, (error, resultado) => {
        if (error) return console.error (error.message)

        if(resultado.length > 0) {
            res.json(resultado)
        } else {
            res.json ('No hay registros')
        }
    })
})

app.get('/empleado/:id', (req, res) => {
    const { id } = req.params

    const query = `SELECT * FROM empleados WHERE id_empleado = ${id};`
    conexion.query (query, (error, resultado) => {
        if (error) return console.error (error.message)

        if(resultado.length > 0) {
            res.json (resultado)
        }else{
            res.json ('No hay registros')
        }
    })
})

app.post ('/empleado/agregar',(req, res) => {
    const empleado = {
        Nom_empleado: req.body.Nom_empleado,
        Correo_elec_admin: req.body.Correo_elec_admin,
        Password_empleado: req.body.Password_empleado,
        Tipo_usuario_idTipo_usuario: req.body.Tipo_usuario_idTipo_usuario,
        Telefono_empleado: req.body.Telefono_empleado,
        Genero_idGenero: req.body.Genero_idGenero
    }
    
    const query = `INSERT INTO empleados SET ?`
    conexion.query(query, empleado, (error) =>{
        if (error) return console.error(error.message)

        res.json('Se inserto correctamente el empleado')
    })
})

app.put('/empleado/actualizar/:id', (req, res) => {
    const { id } = req.params;
    const { Nom_empleado, Correo_elec_admin, Password_empleado, Tipo_usuario_idTipo_usuario, Telefono_empleado, Genero_idGenero} = req.body;

    const query = `UPDATE empleados SET Nom_empleado = '${Nom_empleado}', Correo_elec_admin = '${Correo_elec_admin}', Password_empleado='${Password_empleado}',Tipo_usuario_idTipo_usuario='${Tipo_usuario_idTipo_usuario}', Telefono_empleado='${Telefono_empleado}', Genero_idGenero='${Genero_idGenero}'  WHERE id_empleado = '${id}';`;
    conexion.query(query, (error) => {
        if (error) {
            console.error(error.message);
            res.status(500).json({ error: 'Hubo un error al actualizar el empleado' });
            return;
        }

        res.json('Se actualizó correctamente empleado');
    });
});


app.delete('/empleado/borrar/:id', (req, res) => {
    const { id } = req.params;

    const query = `DELETE FROM empleados WHERE id_empleado=${id};`;
    conexion.query(query, (error) => {
        if (error) {
            console.error(error.message);
            res.status(500).json({ error: 'Hubo un error al eliminar el empleado' });
            return;
        }

        res.json('Se eliminó correctamente el empleado');
    });
});

//genero

app.get ('/genero', (req, res)=> {
    const query = `SELECT * FROM genero;`
    conexion.query (query, (error, resultado) => {
        if (error) return console.error (error.message)

        if(resultado.length > 0) {
            res.json(resultado)
        } else {
            res.json ('No hay registros')
        }
    })
})

app.get('/genero/:id', (req, res) => {
    const { id } = req.params

    const query = `SELECT * FROM genero WHERE idGenero = ${id};`
    conexion.query (query, (error, resultado) => {
        if (error) return console.error (error.message)

        if(resultado.length > 0) {
            res.json (resultado)
        }else{
            res.json ('No hay registros')
        }
    })
})

app.post ('/genero/agregar',(req, res) => {
    const genero = {
        idGenero: req.body.idGenero,
        Desc_genero: req.body.Desc_genero
    }
    
    const query = `INSERT INTO genero SET ?`
    conexion.query(query, genero, (error) =>{
        if (error) return console.error(error.message)

        res.json('Se inserto correctamente el genero')
    })
})

app.put('/genero/actualizar/:id', (req, res) => {
    const { id } = req.params;
    const {Desc_genero} = req.body;

    const query = `UPDATE genero SET Desc_genero='${Desc_genero}'  WHERE idGenero = '${id}';`;
    conexion.query(query, (error) => {
        if (error) {
            console.error(error.message);
            res.status(500).json({ error: 'Hubo un error al actualizar el genero' });
            return;
        }

        res.json('Se actualizó correctamente genero');
    });
});


app.delete('/genero/borrar/:id', (req, res) => {
    const { id } = req.params;

    const query = `DELETE FROM genero WHERE idGenero=${id};`;
    conexion.query(query, (error) => {
        if (error) {
            console.error(error.message);
            res.status(500).json({ error: 'Hubo un error al eliminar el genero' });
            return;
        }

        res.json('Se eliminó correctamente el genero');
    });
});

//Departamento

app.get ('/departamento', (req, res)=> {
    const query = `SELECT * FROM departamento;`
    conexion.query (query, (error, resultado) => {
        if (error) return console.error (error.message)

        if(resultado.length > 0) {
            res.json(resultado)
        } else {
            res.json ('No hay registros')
        }
    })
})

app.get('/departamento/:id', (req, res) => {
    const { id } = req.params

    const query = `SELECT * FROM departamento WHERE idDepartamento = ${id};`
    conexion.query (query, (error, resultado) => {
        if (error) return console.error (error.message)

        if(resultado.length > 0) {
            res.json (resultado)
        }else{
            res.json ('No hay registros')
        }
    })
})

app.post ('/departamento/agregar',(req, res) => {
    const departamento = {
        idDepartamento: req.body.idDepartamento,
        nombre_departamento: req.body.nombre_departamento
    }
    
    const query = `INSERT INTO departamento SET ?`
    conexion.query(query, departamento, (error) =>{
        if (error) return console.error(error.message)

        res.json('Se inserto correctamente el departamento')
    })
})

app.put('/departamento/actualizar/:id', (req, res) => {
    const { id } = req.params;
    const {nombre_departamento} = req.body;

    const query = `UPDATE departamento SET nombre_departamento='${nombre_departamento}'  WHERE idDepartamento = '${id}';`;
    conexion.query(query, (error) => {
        if (error) {
            console.error(error.message);
            res.status(500).json({ error: 'Hubo un error al actualizar el departamento' });
            return;
        }

        res.json('Se actualizó correctamente departamento');
    });
});


app.delete('/departamento/borrar/:id', (req, res) => {
    const { id } = req.params;

    const query = `DELETE FROM departamento WHERE idDepartamento=${id};`;
    conexion.query(query, (error) => {
        if (error) {
            console.error(error.message);
            res.status(500).json({ error: 'Hubo un error al eliminar el departamento' });
            return;
        }

        res.json('Se eliminó correctamente el departamento');
    });
});

//ciudad

app.get ('/ciudad', (req, res)=> {
    const query = `SELECT * FROM ciudad;`
    conexion.query (query, (error, resultado) => {
        if (error) return console.error (error.message)

        if(resultado.length > 0) {
            res.json(resultado)
        } else {
            res.json ('No hay registros')
        }
    })
})

app.get('/ciudad/:id', (req, res) => {
    const { id } = req.params

    const query = `SELECT * FROM ciudad WHERE id_Ciudad = ${id};`
    conexion.query (query, (error, resultado) => {
        if (error) return console.error (error.message)

        if(resultado.length > 0) {
            res.json (resultado)
        }else{
            res.json ('No hay registros')
        }
    })
})

app.post ('/ciudad/agregar',(req, res) => {
    const ciudad = {
        id_Ciudad: req.body.id_Ciudad,
        nombre_ciudad: req.body.nombre_ciudad,
        Departamento_idDepartamento: req.body.Departamento_idDepartamento
    }
    
    const query = `INSERT INTO ciudad SET ?`
    conexion.query(query, ciudad, (error) =>{
        if (error) return console.error(error.message)

        res.json('Se inserto correctamente la ciudad')
    })
})

app.put('/ciudad/actualizar/:id', (req, res) => {
    const { id } = req.params;
    const {nombre_ciudad, Departamento_idDepartamento} = req.body;

    const query = `UPDATE ciudad SET nombre_ciudad='${nombre_ciudad}', Departamento_idDepartamento='${Departamento_idDepartamento}'  WHERE id_Ciudad = '${id}';`;
    conexion.query(query, (error) => {
        if (error) {
            console.error(error.message);
            res.status(500).json({ error: 'Hubo un error al actualizar la ciudad' });
            return;
        }

        res.json('Se actualizó correctamente la ciudad');
    });
});


app.delete('/ciudad/borrar/:id', (req, res) => {
    const { id } = req.params;

    const query = `DELETE FROM ciudad WHERE id_Ciudad=${id};`;
    conexion.query(query, (error) => {
        if (error) {
            console.error(error.message);
            res.status(500).json({ error: 'Hubo un error al eliminar la ciudad' });
            return;
        }

        res.json('Se eliminó correctamente la ciudad');
    });
});

//lugar de reservecion
app.get ('/lugar_reserva', (req, res)=> {
    const query = `SELECT * FROM lugar_reservacion;`
    conexion.query (query, (error, resultado) => {
        if (error) return console.error (error.message)

        if(resultado.length > 0) {
            res.json(resultado)
        } else {
            res.json ('No hay registros')
        }
    })
})

app.get('/lugar_reserva/:id', (req, res) => {
    const { id } = req.params

    const query = `SELECT * FROM lugar_reservacion WHERE ID_lugreserv = ${id};`
    conexion.query (query, (error, resultado) => {
        if (error) return console.error (error.message)

        if(resultado.length > 0) {
            res.json (resultado)
        }else{
            res.json ('No hay registros')
        }
    })
})

app.post ('/lugar_reserva/agregar',(req, res) => {
    const lugar_reserva = {
        ID_lugreserv: req.body.ID_lugreserv,
        Direccion_lugarreserv: req.body.Direccion_lugarreserv,
        Nom_lugreserv: req.body.Nom_lugreserv,
        Ciudad_id_Ciudad: req.body.Ciudad_id_Ciudad
    }
    
    const query = `INSERT INTO lugar_reservacion SET ?`
    conexion.query(query, lugar_reserva, (error) =>{
        if (error) return console.error(error.message)

        res.json('Se inserto correctamente el lugar para reservas')
    })
})

app.put('/lugar_reserva/actualizar/:id', (req, res) => {
    const { id } = req.params;
    const {Direccion_lugarreserv,Nom_lugreserv, Ciudad_id_Ciudad} = req.body;

    const query = `UPDATE lugar_reservacion SET Direccion_lugarreserv='${Direccion_lugarreserv}', Nom_lugreserv='${Nom_lugreserv}', Ciudad_id_Ciudad='${Ciudad_id_Ciudad}'  WHERE ID_lugreserv = '${id}';`;
    conexion.query(query, (error) => {
        if (error) {
            console.error(error.message);
            res.status(500).json({ error: 'Hubo un error al actualizar el lugar de reservacion' });
            return;
        }

        res.json('Se actualizó correctamente el lugar de reservacion');
    });
});


app.delete('/lugar_reserva/borrar/:id', (req, res) => {
    const { id } = req.params;

    const query = `DELETE FROM lugar_reservacion WHERE ID_lugreserv=${id};`;
    conexion.query(query, (error) => {
        if (error) {
            console.error(error.message);
            res.status(500).json({ error: 'Hubo un error al eliminar el lugar de reservacion' });
            return;
        }

        res.json('Se eliminó correctamente el lugar de reservacion');
    });
});

//servicio
app.get ('/servicio', (req, res)=> {
    const query = `SELECT * FROM servicio;`
    conexion.query (query, (error, resultado) => {
        if (error) return console.error (error.message)

        if(resultado.length > 0) {
            res.json(resultado)
        } else {
            res.json ('No hay registros')
        }
    })
})

app.get('/servicio/:id', (req, res) => {
    const { id } = req.params

    const query = `SELECT * FROM servicio WHERE idServicio = ${id};`
    conexion.query (query, (error, resultado) => {
        if (error) return console.error (error.message)

        if(resultado.length > 0) {
            res.json (resultado)
        }else{
            res.json ('No hay registros')
        }
    })
})

app.post ('/servicio/agregar',(req, res) => {
    const servicio = {
        idServicio: req.body.idServicio,
        Nombre_servicio: req.body.Nombre_servicio
    }
    
    const query = `INSERT INTO servicio SET ?`
    conexion.query(query, servicio, (error) =>{
        if (error) return console.error(error.message)

        res.json('Se inserto correctamente el servicio')
    })
})

app.put('/servicio/actualizar/:id', (req, res) => {
    const { id } = req.params;
    const {Nombre_servicio} = req.body;

    const query = `UPDATE servicio SET Nombre_servicio='${Nombre_servicio}' WHERE idServicio = '${id}';`;
    conexion.query(query, (error) => {
        if (error) {
            console.error(error.message);
            res.status(500).json({ error: 'Hubo un error al actualizar el servicio' });
            return;
        }

        res.json('Se actualizó correctamente el servicio');
    });
});


app.delete('/servicio/borrar/:id', (req, res) => {
    const { id } = req.params;

    const query = `DELETE FROM servicio WHERE idServicio=${id};`;
    conexion.query(query, (error) => {
        if (error) {
            console.error(error.message);
            res.status(500).json({ error: 'Hubo un error al eliminar el servicio' });
            return;
        }

        res.json('Se eliminó correctamente el servicio');
    });
});

//cliente
app.get ('/cliente', (req, res)=> {
    const query = `SELECT * FROM cliente;`
    conexion.query (query, (error, resultado) => {
        if (error) return console.error (error.message)

        if(resultado.length > 0) {
            res.json(resultado)
        } else {
            res.json ('No hay registros')
        }
    })
})

app.get('/cliente/:id', (req, res) => {
    const { id } = req.params

    const query = `SELECT * FROM cliente WHERE id_Cliente = ${id};`
    conexion.query (query, (error, resultado) => {
        if (error) return console.error (error.message)

        if(resultado.length > 0) {
            res.json (resultado)
        }else{
            res.json ('No hay registros')
        }
    })
})

app.post ('/cliente/agregar',(req, res) => {
    const cliente = {
        id_Cliente: req.body.id_Cliente,
        Nombre_cliente: req.body.Nombre_cliente,
        Correoelectronico_cliente: req.body.Correoelectronico_cliente,
        Password_cliente: req.body.Password_cliente,
        Telefono_cliente: req.body.Telefono_cliente,
        Genero_idGenero: req.body.Genero_idGenero,
        Ciudad_id_Ciudad: req.body.Ciudad_id_Ciudad
    }
    
    const query = `INSERT INTO cliente SET ?`
    conexion.query(query, cliente, (error) =>{
        if (error) return console.error(error.message)

        res.json('Se inserto correctamente el cliente')
    })
})

app.put('/cliente/actualizar/:id', (req, res) => {
    const { id } = req.params;
    const {Nombre_cliente, Correoelectronico_cliente, Password_cliente, Telefono_cliente, Genero_idGenero, Ciudad_id_Ciudad} = req.body;

    const query = `UPDATE cliente SET Nombre_cliente ='${Nombre_cliente}', Correoelectronico_cliente = '${Correoelectronico_cliente}', Password_cliente = '${Password_cliente}', Telefono_cliente = '${Telefono_cliente}' , Genero_idGenero = '${Genero_idGenero}', Ciudad_id_Ciudad = '${Ciudad_id_Ciudad}' WHERE id_Cliente = '${id}';`;
    conexion.query(query, (error) => {
        if (error) {
            console.error(error.message);
            res.status(500).json({ error: 'Hubo un error al actualizar el cliente' });
            return;
        }

        res.json('Se actualizó correctamente el cliente');
    });
});


app.delete('/cliente/borrar/:id', (req, res) => {
    const { id } = req.params;

    const query = `DELETE FROM cliente WHERE id_Cliente=${id};`;
    conexion.query(query, (error) => {
        if (error) {
            console.error(error.message);
            res.status(500).json({ error: 'Hubo un error al eliminar el cliente' });
            return;
        }

        res.json('Se eliminó correctamente el clite');
    });
});

// empresa

app.get ('/empresa', (req, res)=> {
    const query = `SELECT * FROM empresa;`
    conexion.query (query, (error, resultado) => {
        if (error) return console.error (error.message)

        if(resultado.length > 0) {
            res.json(resultado)
        } else {
            res.json ('No hay registros')
        }
    })
})

app.get('/empresa/:id', (req, res) => {
    const { id } = req.params

    const query = `SELECT * FROM empresa WHERE Nit_Empresa = ${id};`
    conexion.query (query, (error, resultado) => {
        if (error) return console.error (error.message)

        if(resultado.length > 0) {
            res.json (resultado)
        }else{
            res.json ('No hay registros')
        }
    })
})

app.post ('/empresa/agregar',(req, res) => {
    const empresa = {
        Nit_Empresa: req.body.Nit_Empresa,
        Nombre_empresa: req.body.Nombre_empresa,
        Correoelectronico_empresa: req.body.Correoelectronico_empresa,
        Password_empresa: req.body.Password_empresa,
        Telefono_empresa: req.body.Telefono_empresa,
        Ciudad_id_Ciudad: req.body.Ciudad_id_Ciudad
    }
    
    const query = `INSERT INTO empresa SET ?`
    conexion.query(query, empresa, (error) =>{
        if (error) return console.error(error.message)

        res.json('Se inserto correctamente la empresa')
    })
})

app.put('/empresa/actualizar/:id', (req, res) => {
    const { id } = req.params;
    const {Nombre_empresa,Correoelectronico_empresa,Password_empresa,Telefono_empresa,Ciudad_id_Ciudad} = req.body;

    const query = `UPDATE empresa SET Nombre_empresa ='${Nombre_empresa}', Correoelectronico_empresa = '${Correoelectronico_empresa}', Password_empresa = '${Password_empresa}', Telefono_empresa = '${Telefono_empresa}', Ciudad_id_Ciudad = '${Ciudad_id_Ciudad}' WHERE Nit_Empresa = '${id}';`;
    conexion.query(query, (error) => {
        if (error) {
            console.error(error.message);
            res.status(500).json({ error: 'Hubo un error al actualizar la empresa' });
            return;
        }

        res.json('Se actualizó correctamente la empresa');
    });
});


app.delete('/empresa/borrar/:id', (req, res) => {
    const { id } = req.params;

    const query = `DELETE FROM empresa WHERE Nit_Empresa=${id};`;
    conexion.query(query, (error) => {
        if (error) {
            console.error(error.message);
            res.status(500).json({ error: 'Hubo un error al eliminar la empresa' });
            return;
        }

        res.json('Se eliminó correctamente la empresa');
    });
});

//Reservacion

app.get ('/reservacion', (req, res)=> {
    const query = `SELECT * FROM reservacion;`
    conexion.query (query, (error, resultado) => {
        if (error) return console.error (error.message)

        if(resultado.length > 0) {
            res.json(resultado)
        } else {
            res.json ('No hay registros')
        }
    })
})

app.get('/reservacion/:id', (req, res) => {
    const { id } = req.params

    const query = `SELECT * FROM reservacion WHERE id_Reservacion = ${id};`
    conexion.query (query, (error, resultado) => {
        if (error) return console.error (error.message)

        if(resultado.length > 0) {
            res.json (resultado)
        }else{
            res.json ('No hay registros')
        }
    })
})

app.post ('/reservacion/agregar',(req, res) => {
    const empresa = {
        Id_Reservacion: req.body.id_Reservacion,
        Servicio_idServicio: req.body.Servicio_idServicio,
        Fecha_reservacion: req.body.Fecha_reservacion,
        Hora_reservacion: req.body.Hora_reservacion,
        Lugar_reservacion_idLugar_reservacion: req.body.Lugar_reservacion_idLugar_reservacion,
        Empresa_Nit_Empresa: req.body.Empresa_Nit_Empresa,
        Cliente_id_Cliente:req.body.Cliente_id_Cliente,
        Valor:req.body.Valor,
        Empleados_id_empleado:req.body.Empleados_id_empleado
    }
    
    const query = `INSERT INTO reservacion SET ?`
    conexion.query(query, empresa, (error) =>{
        if (error) return console.error(error.message)

        res.json('Se inserto correctamente la reservacion')
    })
})

app.put('/reservacion/actualizar/:id', (req, res) => {
    const { id } = req.params;
    const {Servicio_idServicio,Fecha_reservacion,Hora_reservacion,Lugar_reservacion_idLugar_reservacion,Empresa_Nit_Empresa,Cliente_id_Cliente,Valor,Empleados_id_empleado} = req.body;

    const query = `UPDATE reservacion SET Servicio_idServicio ='${Servicio_idServicio}', Fecha_reservacion = '${Fecha_reservacion}', Hora_reservacion = '${Hora_reservacion}', Lugar_reservacion_idLugar_reservacion = '${Lugar_reservacion_idLugar_reservacion}', Empresa_Nit_Empresa = '${Empresa_Nit_Empresa}', Cliente_id_Cliente = '${Cliente_id_Cliente}', Valor = '${Valor}', Empleados_id_empleado='${Empleados_id_empleado}' WHERE id_Reservacion = '${id}';`;
    conexion.query(query, (error) => {
        if (error) {
            console.error(error.message);
            res.status(500).json({ error: 'Hubo un error al actualizar la reservacion' });
            return;
        }

        res.json('Se actualizó correctamente la reservacion');
    });
});


app.delete('/reservacion/borrar/:id', (req, res) => {
    const { id } = req.params;

    const query = `DELETE FROM reservacion WHERE id_reservacion=${id};`;
    conexion.query(query, (error) => {
        if (error) {
            console.error(error.message);
            res.status(500).json({ error: 'Hubo un error al eliminar la reservacion' });
            return;
        }

        res.json('Se eliminó correctamente la reservacion');
    });
});

app.put('/cliente/actualizar/:id', (req, res) => {
    const { id } = req.params;
    const { Nombre_cliente, Correoelectronico_cliente, Ciudad_id_Ciudad } = req.body;

    const query = `UPDATE cliente SET Nombre_cliente='${Nombre_cliente}', Correoelectronico_cliente='${Correoelectronico_cliente}', Ciudad_id_Ciudad='${Ciudad_id_Ciudad}' WHERE id_Cliente = '${id}';`;
    conexion.query(query, (error) => {
        if (error) {
            console.error(error.message);
            res.status(500).json({ error: 'Hubo un error al actualizar el cliente' });
            return;
        }

        res.json('Se actualizó correctamente el cliente');
    });
});
