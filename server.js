const express = require("express");
const cors = require("cors");
const fetch = (...args) =>
  import("node-fetch").then(({ default: fetch }) => fetch(...args));
const bodyParser = require("body-parser");

const GITHUB_SECRET_KEY = "44928234e4efe2866147faeb04c3335aa1da9e75";
const GITHUB_CLIENT_ID = "d99d85b8cba1733c4116";

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.get("/getAccessToken", async function (req, res) {
  const githubUrl = "https://github.com/login/oauth/access_token";
  req.query.code;
  const params =
    "?client_id=" +
    GITHUB_CLIENT_ID +
    "&client_secret=" +
    GITHUB_SECRET_KEY +
    "&code=" +
    req.query.code;
  await fetch(githubUrl + params, {
    method: "POST",
    headers: {
      Accept: "application/json",
    },
  })
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      res.json(data);
    });
});

app.get("/getUserData", async function (req, res) {
  req.get("Authorization");
  await fetch("https://api.github.com/user", {
    method: "GET",
    headers: {
      Authorization: req.get("Authorization"),
    },
  })
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data);
      res.json(data);
    });
});

app.listen(4000, function () {
  console.log("Cors server running on port 4000");
});
