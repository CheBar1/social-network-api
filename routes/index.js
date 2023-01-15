// Require express router
const router = require("express").Router();

// Import all routes from ./api/index.js
const apiRoutes = require("./api");

// Add api prefix of `api`to imported routes
router.use("/api", apiRoutes);

// Send error message
router.use((req, res) => res.send("Wrong route!"));

// Export module router
module.exports = router;
