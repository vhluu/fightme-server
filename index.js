
const express  = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
// const socket = require('socket.io');
const cors = require('cors');
const keys = require('./config/keys');
var path = require('path');
var game = require('./routes/game');
var turn = require('./routes/turn');

const app = new express();
app.use(bodyParser.json());
app.use(cors());

var server = app.listen(5000,()=>{
  console.log("Hi, I am running at PORT 5000");
})

app.use('/api/game', game);
app.use('/api/turn', turn);


// Connecting Mongo DB

mongoose.connect(keys.mongoURI, { useNewUrlParser: true });
mongoose.connection.on('error',(error)=>{
  console.log("Error");
});
mongoose.connection.once('open',function(){
  console.log("DB connection established");
});

// Setting up Socket.io

// let io =  socket(server);

// io.on("connection", function(socket){
//   console.log("Socket Connection Established with ID :"+ socket.id)
//   socket.on("game", async function(game){
//     game.created = new Date();
//     let response = await new session(game).save();
//     socket.emit("game",game);
//   })
// })


// app.get('/game', async (req,res) => {
//   let result = await session.find();
//   res.send(result);
// })