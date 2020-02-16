const { Users } = require("../models/index");
const { Op } = require("sequelize");
const bcrypt = require("bcrypt");
async function getUserById(userId) {
  try {
    console.log("getUserById: started", userId);
    let userRes = await User.findByPk(userId);
    console.log("getUserById: completed", userRes);
    return userRes;
  } catch (err) {
    console.log("getUserById: error", userId, err);
    throw err;
  }
}

async function createUser(user) {
  try {
    let { username = null, password = null, role = null } = user;

    console.log("createUser: started");

    let passwordHash = await bcrypt.hash(password, 10);

    let userRes = await Users.create({
      username,
      passwordHash,
      role
    });
    console.log("createUser: completed", userRes);
    return userRes.toJSON();
  } catch (err) {
    console.log("createUser: error", err);
    throw err;
  }
}

async function getUserByUsername(username) {
  try {
    console.log("getUserByUsername: started", username);
    let userRes = null;
    userRes = await Users.findOne({
      attributes: ["id", "username", "passwordHash", "role"],
      where: {
        username: {
          [Op.eq]: username
        }
      }
    });
    console.log("getUserByUsername: completed", user);
    return userRes.toJSON();
  } catch (err) {
    console.log("getUserByUsername: failed", username, err);
    throw err;
  }
}
async function authenticateUser(token) {}
async function singinUser(username, password) {}

module.exports = {
  getUserById,
  createUser,
  getUserByUsername
};
