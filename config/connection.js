const { mongoose, connect, connection } = require("mongoose");

// Suppress mongoose deprecation warning when server starts
mongoose.set("strictQuery", false);

// After you create your Heroku application, visit https://dashboard.heroku.com/apps/ select the application name and add your Atlas connection string as a Config Var
// Node will look for this environment variable and if it exists, it will use it. Otherwise, it will assume that you are running this application locally
const connectionString =
  process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/social-network-api";

connect(connectionString, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Logs mongo queries being executed
mongoose.set("debug", true);

// Export connection module
module.exports = connection;
