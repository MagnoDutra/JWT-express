const CustomAPIError = require("../errors/custom-error");
const jwt = require("jsonwebtoken");
require("dotenv").config();

async function login(req, res) {
  const { username, password } = req.body;

  if (!username || !password)
    throw new CustomAPIError("Please provide email and password", 400);

  const id = new Date().getDate();

  const token = jwt.sign({ id, username }, process.env.JWT_SECRET, {
    expiresIn: "30d",
  });

  res.status(200).json({ msg: "user created", token });
}

async function dashboard(req, res) {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    throw new CustomAPIError("You must be logged in", 401);
  }

  const token = authHeader.split(" ")[1];

  const luckyNumber = Math.floor(Math.random() * 100);
  res
    .status(200)
    .json({ msg: `Magno`, secret: `your secret number: ${luckyNumber}` });
}

module.exports = { login, dashboard };
