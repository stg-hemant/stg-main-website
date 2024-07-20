const sql = require("mssql");

const config = {
  user: "stgappuser",
  password: "stappuser@123",
  server: "20.81.193.95",
  database: "stgws",
  options: {
    encrypt: true,
    trustServerCertificate: true,
  },
};

const connectToDatabase = async () => {
  try {
    await sql.connect(config);
    console.log("Connect to the database.");
  } catch (error) {
    console.log("Database connection error:", error);
    throw error;
  }
};

const executeQuery = (connection, query) => {
  return new Promise((resolve, reject) => {
    const request = new sql.Request(connection);
    request.query(query, (err, result) => {
      if (err) {
        console.error("Query error:", err);
        reject(err);
      } else {
        console.log(result.recordset);
        resolve(result);
      }
    });
  });
};

module.exports = {
  connectToDatabase,
  executeQuery,
  sql,
};
