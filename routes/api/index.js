// Set requirements - express router
const router = require("express").Router();

// Set routed for thought and user
const thoughtRoutes = require("./thoughtRoutes");
const userRoutes = require("./userRoutes");

// Add `/thoughts`and `/users` to created routes
router.use("/thoughts", thoughtRoutes);
router.use("/users", userRoutes);

// Export module router
module.exports = router;
