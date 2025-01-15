const express = require('express');
const app = express();
const port = 3000;
const mongoose = require('mongoose');
const path = require('path');

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));

main()
.then(()=>{console.log("mongo connected")})
.catch(err => console.log(err));

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/aayani')
  } 

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    number: Number,
    msg: String,
})  

const userDetails = mongoose.model("userDetails",userSchema);

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
  });


app.post("/fdetails",(req,res)=>{
  const details = new userDetails(req.body);
  console.log(req.body);
  details.save();
  
});


app.listen(port,()=>{
    console.log(`app is listening at port ${port}`);
})

  
