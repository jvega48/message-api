import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import routes from './src/routes/messageRoutes';

const app = express();
const PORT = process.env.PORT || 5050;

//fix cross origin if not remove if causing problems
app.use( (req, res, next) =>{
	res.header('Access-Control-Allow-Origin', '*');
	res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
	next();
})

// mongoose connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://admin:admin1@ds051720.mlab.com:51720/websitemessagedb', {
    useMongoClient: true
}).then( () => {
	console.log('connected succesfully');
}, err => {
	console.log(`err`);
});


// bodyparser setup
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

routes(app);

// serving static files
app.use(express.static('public'));

app.get('/', (req, res) =>
    res.send(`Node and express server is running on port ${PORT}`)
);

app.listen(PORT, () =>
    console.log(`your server is running on port ${PORT}`)
);