const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');

const app = express();

app.use(function(req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', '*');
    res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.use(bodyParser.json());

const PUERTO = 3000;

const conexion = mysql.createConnection(
    {
        host: 'localhost',
        database: 'ejemplo',
        user: 'root',
        password: ''
    }
);

app.listen(PUERTO, () => {
    console.log(`Servidor corriendo en el puerto ${PUERTO}`);
});

conexion.connect(error => {
    if (error) throw error;
    console.log('Conexión exitosa a la base de datos');
});

app.get('/', (req, res) => {
    res.send('Ejemplo');
});

app.post('/registro', (req, res) => {
    const { Nombre, Correo_electronico, Password_usuario } = req.body;

    const sql = 'INSERT INTO usuario (Nombre, Correo_electronico, Password_usuario) VALUES (?,?,md5(?))';
    conexion.query(sql, [Nombre, Correo_electronico, Password_usuario], (error, resultado) => {
        if (error) {
            console.error('Error al registrar', error);
            res.status(500).json({ message: 'Error al registrar' });
        } else {
            console.log('Usuario registrado exitosamente');
            res.status(200).json({ message: 'Usuario registrado exitosamente' });
        }
    });
});


app.post('/login', (req, res) => {
    const { Nombre, Correo_electronico, Password_usuario } = req.body;

    const sql = 'SELECT * FROM usuario WHERE Nombre = ? AND Correo_electronico = ? AND Password_usuario = md5(?);';
    conexion.query(sql, [Nombre, Correo_electronico, Password_usuario], (error, resultados) => {
        if (error) {
            console.error('Error al iniciar sesión:', error);
            res.status(500).json({ message: 'Error al iniciar sesión' });
            return; // Detener la ejecución en caso de error
        }

        if (resultados.length > 0) {
            console.log('Usuario encontrado');
            // Aquí puedes realizar la comparación de contraseñas si lo deseas
            res.status(200).json({ message: 'Usuario encontrado' });
        } else {
            console.log('Usuario no encontrado');
            res.status(404).json({ message: 'Usuario no encontrado' });
        }
    });
});



app.get('/busqueda/:Correo_electronico', (req,res) => {
    const { Correo_electronico } = req.params;
    const sql= `SELECT * FROM usuario WHERE Correo_electronico=?`
    conexion.query(sql,[Correo_electronico],(error, resultado) => {
        if(error) {
            console.error ('Error al encontar informacion', error)
            res.status(500).json({message: 'Error al encontrar informacion'})
        }

        if (resultado.length > 0){
            res.json(resultado)
        }else{
            res.json('No hay informacion')
        }
    })
})

app.post ('/formulario',(req,res) => {
    const {escritura, Id_usuario, Id_comelibros, tipo_comentario} = req.body;
    const Buscarusuariosql = `SELECT Id FROM usuario WHERE Correo_electronico = ?`
    conexion.query(Buscarusuariosql,[Id_usuario],(error, resultado)=>{
        if (error) {
            console.error('Error al ingresar informacion',error)
            res.status(500).json ({message: 'Error al encontrar informacion'})
        } else if (resultado.length !== 0) {
            const Insertarsql = `INSERT INTO info (tipo_comentario, escritura, Id_usuario, Id_comelibros) VALUES (?,?,?,?);`;
            conexion.query(Insertarsql, [tipo_comentario, escritura, resultado[0].Id, Id_comelibros],(error, resultado)=>{
                if (error) {
                    console.error ('Error al ingresar informacion',error);
                    res.status(500).json({message: 'Error al ingresar informacion'});
                } else {
                    console.log ('Informacion Registrada con exito');
                    res.status(200).json ({ message : ' Informacion registrada con exito'});
                }
            })
        }else{
            console.log ('Usuario no encontrado');
            res.status(404).json ({ message: 'Usuario no encontrado'})
        }
    })
})