import express from "express";

const app=express();
const port=3000;

app.listen(port, () => {
  console.log(`Server running on port ${port}.`);
});
app.get("/", (req, res) => {
  res.send(`<h1> Hello, this is my first express server </h1>`);
});
app.get("/contact", (req, res) => {
    res.send(`<h1> Hello, this is my contact page </h1>`);
    });

app.get("/about", (req, res) => {
res.send(`<h1> Hello, this is about me </h1>`);
});