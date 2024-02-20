// // module
// import bla from "bla bla";
// // commonJs
// const bla = require(`bla bla`);

const express = require("express");
const { products, users } = require("./dummy.json");

// console.log(products);
// console.log(users);

const app = express();

app.get("/products", (req, res) => {
  // res.type = "application/json";
  res.send({ products });
});
app.get("/users", (req, res) => {
  res.type = "application/json";
  res.send({ users });
});

app.get("/usernames", (req, res) => {
  res.type = "application/json";
  res.send({ usernames });
});

const usernames = users.map((e) => {
  return e.name;
});
// console.log(usernames);

app.listen(3001, () => {
  console.log("Server is listening at port 3001");
});
