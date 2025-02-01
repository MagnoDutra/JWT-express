async function login(req, res) {
  res.send("Fake Login/Register/Signup");
}

async function dashboard(req, res) {
  const luckyNumber = Math.floor(Math.random() * 100);
  res
    .status(200)
    .json({ msg: `Magno`, secret: `your secret number: ${luckyNumber}` });
}

module.exports = { login, dashboard };
