const { UnauthenticatedError } = require("../errors");
const jwt = require("jsonwebtoken");

async function authenticationMiddleware(req, res, next) {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    throw new UnauthenticatedError("You must be logged in");
  }

  const token = authHeader.split(" ")[1];

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    const { id, username } = decoded;
    req.user = { id, username };
    next();
  } catch (error) {
    throw new UnauthenticatedError("You must be logged in");
  }
}

module.exports = authenticationMiddleware;
