const { connectToDatabase, sql, executeQuery } = require("../db");

class Auth {
  static async validateUser(username, password) {
    const connection = await connectToDatabase();

    const query = `
      SELECT UserID, RoleTypeID, Name, Username, IsActive
      FROM Users
      WHERE Username = '${username}' AND Password = '${password}'
    `;

    const validateResult = await executeQuery(connection, query);

    if (validateResult.recordset.length === 0) {
      throw new Error("Invalid username or password");
    }

    const user = validateResult.recordset[0];

    if (!user.IsActive) {
      throw new Error("User is not active");
    }

    return user;
  }

  static async changePassword(userId, oldPassword, newPassword) {
    const connection = await connectToDatabase();

    const validateQuery = `
      SELECT UserID
      FROM Users
      WHERE UserID = '${userId}' AND Password = '${oldPassword}'
    `;

    const validateResult = await executeQuery(connection, validateQuery);

    if (validateResult.recordset.length === 0) {
      throw new Error("Invalid old password");
    }

    const updateQuery = `
      UPDATE Users
      SET Password = '${newPassword}'
      WHERE UserID = '${userId}'
    `;

    await executeQuery(connection, updateQuery);

    return { message: "Password changed successfully" };
  }
}

module.exports = Auth;
