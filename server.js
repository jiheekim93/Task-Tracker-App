const express = require('express');
const mongoose = require ('mongoose');
const session = require('express-session')

const cors = require('cors')
const app = express ();
require('dotenv').config()
const db = mongoose.connection;


//controllers
const taskController = require('./controllers/task.js')


//Middleware
const PORT = process.env.PORT || 3000;
const MONGODB_URI = process.env.MONGODB_URI;
const SECRET = process.env.SECRET
mongoose.connect(MONGODB_URI);





app.use('/tasks', taskController)


app.get('/' , (req, res) => {
  res.send('Hello World!');
});


db.on('error', (err) => console.log(err.message + ' is Mongod not running?'));
db.on('connected', () => console.log('mongo connected: ', MONGODB_URI));
db.on('disconnected', () => console.log('mongo disconnected'));


app.listen(process.env.PORT || 3000, function(){
  console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
});
