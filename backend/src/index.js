const express = require('express')
const cors =require('cors')
const routes =  require('./routes')

const app = express()


app.use(cors())
app.use(express.json())
app.use(routes)

/**
 * Rota / Recurso
 */

/**
 * Métodos HTTP:
 * 
 * GET: buscar/listar  uma infor no backend
 * POST: Criar uma info no backend
 * PUT: Alterar uma info ''
 * DELETE: Deletar uma info no ''
 */

 /**
  * Tipos de parametros:
  * 
  * Query Params: Paramentros nomeados enviados na rota após o simbolo de ? e gerelamente eles severm para filtros e paginação
  * Route Params: Parametros utilizdos para identificar recursos
  * Request Body: Corpo da requisição , criar ou alterar recursos
  */

/**
 * SQL : MySql , SQLLite , PostgreSQL, Oracle etc.
 * noSQL : MongoDB,CouchDB
 */

 /**
  * Driver : SELECT * FROM users 
  * Query Builder: table('users').select('*').where()
  */



app.listen(3333)






















