const ContactModel = require("../models/contact");

const saveContactMessage = async (req, res) => {
  const { firstname, lastname, email, message, communicationMessage, consent } =
    req.body;

  try {
    await ContactModel.saveContactMessage(
      firstname,
      lastname,
      email,
      message,
      communicationMessage,
      consent
    );
    res.status(200).json({ message: "Message sent successfully." });
  } catch (error) {
    console.error("Error saving contact message:", error);
    res.status(500).json({ error: "Failed to save contact message." });
  }
};

module.exports = {
  saveContactMessage,
};
