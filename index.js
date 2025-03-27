// first we say npm init -y. Then inside package-json under main we add: "type": "module".

import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;
var blogs = [];
var i = 0;

app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.render("home.ejs");
});

app.get('/write', (req, res) => {
    res.render("post.ejs");
});

app.post('/submit', (req, res) => {
    blogs[i] = req.body.blog;
    i++;
    res.render("post.ejs");
});


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});