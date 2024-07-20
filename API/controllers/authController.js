const Auth = require("../models/user");
const jwt = require("jsonwebtoken");
const secretKey = "54dfgh1fdh5df41g5dfgdgd1fg5d1fg18dsgdfg2";

exports.loginUser = async (req, res) => {
  const { username, password } = req.body;

  try {
    const user = await Auth.validateUser(username, password);

    const token = jwt.sign(
      { userId: user.UserID, username: user.Username },
      secretKey,
      { expiresIn: "1h" }
    );

    res.json({ userId: user.UserID, token, message: "Login Successful" });
  } catch (error) {
    console.error("Error during login:", error.message);
    if (
      error.message === "Invalid username or password" ||
      error.message === "User is not active"
    ) {
      res.status(401).json({ error: error.message });
    } else {
      res.status(500).json({ message: "Internal Server Error" });
    }
  }
};

exports.changePassword = async (req, res) => {
  const { userId, oldPassword, newPassword } = req.body;

  try {
    const result = await Auth.changePassword(userId, oldPassword, newPassword);

    res.json(result);
  } catch (error) {
    console.error("Error during password change:", error);
    res.status(500).send({ error: error.message });
  }
};
