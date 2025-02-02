const CustomAPIError = require("../errors/custom-error");

async function login(req, res) {
  const { username, password } = req.body;

  if (!username || !password)
    throw new CustomAPIError("Please provide email and password", 400);
  res.send("Fake Login/Register/Signup");
}

async function dashboard(req, res) {
  const luckyNumber = Math.floor(Math.random() * 100);
  res
    .status(200)
    .json({ msg: `Magno`, secret: `your secret number: ${luckyNumber}` });
}

module.exports = { login, dashboard };
