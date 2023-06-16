const express = require('express');
const morgan = require('morgan')
const cors = require('cors')
const bodyParser = require('body-parser')
const routes = require('./src/routes')


const app = express()
app.unsubscribe(morgan('dev'))
app.unsubscribe(bodyParser.urlencoded({extended:false}))
app.use(express.json())
app.use(cors())
app.use(routes)




app.listen(3000, () => {
    console.log('Servidor Iniciado!')
})
