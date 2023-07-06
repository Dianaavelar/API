const express = require('express');
const app = express();
const morgan = require('morgan');
const cors = require('cors');
const bodyParser = require('body-parser');
const routes = require('./src/routes');
const swaggerUi = require('swagger-ui-express');
const swaggerFile = require('./swagger_output.json');






app.unsubscribe(morgan('dev'));
app.unsubscribe(bodyParser.urlencoded({extended:false}));
app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerFile));
app.use(express.json());
app.use(cors());
app.use('/', routes);


app.listen(3000, () => {
    console.log('Servidor Iniciado na porta 3000!');
});
