//server instatinate
const bodyParser = require('body-parser');
const express = require('express');
const app = express();

//used to parse req.body in express -> 
 const bodyParser = require('body-parser');

 //sepcifically parse JSON data and add it to the request .Body objest
app.use(bodyParser.json());


//activate the server on port 3000
app.listen(3000, () =>{
    console.log("Server started at port no. 3000")
});

// Routes
app.get('/',(request,responce) =>{
    res.send("hello jee ,kaise ho app");
})

app.post('/api/cars',(request,response) =>{
    const {name,brand} = request.body;
    console.log(name);
    console.log(brand);
    resonce.send("Car Submitted Successfully")
})

const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/myDaatabase',{
    userNewUrlParser:true,
    useUnifiedTopology:true
    })

.then(() =>{console.log("connection successful")})
.catch(()=>{console.log("recieved an error")});