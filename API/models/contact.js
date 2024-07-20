const { connectToDatabase, executeQuery } = require("../db");

class ContactModel {
  static async saveContactMessage(
    firstname,
    lastname,
    email,
    message,
    communicationMessage,
    consent
  ) {
    const connection = await connectToDatabase();
    const query = `
      INSERT INTO ContactMessages (FirstName, LastName, Email, Message, CommunicationMessage, Consent)
      VALUES ('${firstname}', '${lastname}', '${email}', '${message}', ${
      communicationMessage ? 1 : 0
    }, ${consent ? 1 : 0})
    `;

    await executeQuery(connection, query);
  }
}

module.exports = ContactModel;
