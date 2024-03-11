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


