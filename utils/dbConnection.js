const mongoose = require("mongoose");
const colors = require("colors");

async function dbConnection() {
  try {
    await mongoose.connect(
      "mongodb+srv://vladantonoae:FTAqwqAZp0f2LNk6@cluster0.xiaqts9.mongodb.net/db-contacts"
    );
    console.log(colors.bgGreen.italic.bold("Database connection successful!"));
  } catch (error) {
    console.error(colors.bgRed.italic.bold(error));
    process.exit(1);
  }
}

module.exports = dbConnection;
