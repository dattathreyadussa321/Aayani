const express = require('express');
const app = express();
const port = 3000;
const mongoose = require('mongoose');
const path = require('path');

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));

main()
  .then(() => {
    console.log("MongoDB connected");
  })
  .catch(err => console.log(err));

async function main() {
  // Correct MongoDB Atlas connection string (ensure this is correct)
  await mongoose.connect('mongodb+srv://aayani:aayani@cluster0.tuyjm.mongodb.net/');
}

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  number: Number,
  msg: String,
});

const userDetails = mongoose.model("userDetails", userSchema);

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.post("/fdetails", (req, res) => {
  const details = new userDetails(req.body);
  console.log(req.body);
  details.save()
    .then(() => {
      res.send("Data saved successfully");
    })
    .catch(err => {
      console.log(err);
      res.status(500).send("Error saving data");
    });
});

app.listen(port, () => {
  console.log(`App is listening at port ${port}`);
});
