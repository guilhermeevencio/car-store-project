import * as express from 'express';
import router from './routes';
import ErrorHandler from './middlewares/ErrorHandler';
import * as cors from 'cors'
import bodyParser = require('body-parser');

const app = express();

app.use(cors());
app.use(express.json({limit: '25mb'}));
app.use(express.urlencoded({limit: '25mb', extended: true}));

app.use(router);
app.use(ErrorHandler);

export default app
