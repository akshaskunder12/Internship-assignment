const express = require("express");
const mongoose = require("mongoose");
const routes = require("./Routes/route");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

app.use("/", routes);
// DB Connection

    mongoose.connect("mongodb+srv://akshaskunder12:Aksha9964106095@cluster0.djyccta.mongodb.net/Batch3")
  
  .then(() => {
    console.log("Database is Connected Successfully 😎");
  })
  .catch((err) => {
    console.log(err, "Something Went Wrong");
  });

// Test API
app.get("/test", (req, res) => {
  res.send("Hello Aksha, This is Test Api 😎");
});

app.listen(5000, () => {
  console.log("Server Is Running On Port 5000");
});



// mongoose.connect("mongodb+srv://akshaskunder12:Aksha9964106095@cluster0.djyccta.mongodb.net/Batch3")
// .then(()=>{
//     console.log("DB connected");
// })
// .catch((err)=>{
//     console.log(err,"Something went wrong");
// });

// app.get("/test",(req,res)=>{
//     res.send("bye")
// })

// app.listen(4000,()=>{
//     console.log("Server is Connected");
// });




// const express = require('express');
// const app = express();
// const port = 3000;
// const mongoose = require('mongoose');
// const bodyParser = require('body-parser');

// // Connect to MongoDB
// mongoose.connect("mongodb+srv://akshaskunder12:Aksha9964106095@cluster0.djyccta.mongodb.net/Batch3")
// // Define a schema for your recipes
// const recipeSchema = new mongoose.Schema({
//   name: String,
//   ingredients: [String],
//   instructions: String,
// });

// // Define a model for your recipes
// const Recipe = mongoose.model('Recipe', recipeSchema);

// // Use body-parser middleware to parse incoming requests
// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(bodyParser.json());

// // Create a new recipe
// app.post('/recipes', async (req, res) => {
//   const recipe = new Recipe(req.body);
//   await recipe.save();
//   res.send(recipe);
// });

// // Get all recipes
// app.get('/recipes', async (req, res) => {
//   const recipes = await Recipe.find();
//   res.send(recipes);
// });

// // Get a single recipe by ID
// app.get('/recipes/:id', async (req, res) => {
//   const recipe = await Recipe.findById(req.params.id);
//   res.send(recipe);
// });

// // Update a recipe by ID
// app.put('/recipes/:id', async (req, res) => {
//   const recipe = await Recipe.findByIdAndUpdate(req.params.id, req.body);
//   res.send(recipe);
// });

// // Delete a recipe by ID
// app.delete('/recipes/:id', async (req, res) => {
//   const recipe = await Recipe.findByIdAndDelete(req.params.id);
//   res.send(recipe);
// });

// // Start the server
// app.listen(port, () => {
//   console.log(`Server listening at http://localhost:${port}`);
// });