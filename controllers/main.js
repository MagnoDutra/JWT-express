const { BadRequest } = require("../errors");
const jwt = require("jsonwebtoken");
require("dotenv").config();

async function login(req, res) {
  const { username, password } = req.body;

  if (!username || !password)
    throw new BadRequest("Please provide an user and a password");

  const id = new Date().getDate();

  const token = jwt.sign({ id, username }, process.env.JWT_SECRET, {
    expiresIn: "30d",
  });

  res.status(200).json({ msg: "user created", token });
}

async function dashboard(req, res) {
  const { username } = req.user;
  const luckyNumber = Math.floor(Math.random() * 100);

  res.status(200).json({
    msg: `Hello ${username}`,
    secret: `your secret number: ${luckyNumber}`,
  });
}

module.exports = { login, dashboard };
