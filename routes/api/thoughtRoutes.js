// Require express router
const router = require("express").Router();

const {
  getAllThoughts,
  getThoughtById,
  createThought,
  updateThoughts,
  deleteThoughts,
  addReaction,
  deleteReaction,
} = require("../../controllers/thoughtController");

// Routes to `/api/thoughts` - GET and POST
router.route("/").get(getAllThoughts).post(createThought);
// post a new thought - example data
// {
//     "thoughtText": "Here's a cool thought...",
//     "username": "lernantino",
//     "userId": " "
// }
// POST to create a new thought (don't forget to push the created thought's _id to the associated user's Thoughts array field)

// Routes to `/api/thoughts/:id` - GET, PUT and DELETE
router
  .route("/:id")
  .get(getThoughtById)
  .put(updateThoughts)
  .delete(deleteThoughts);

// Routes to `/api/thoughts/:thoughtId/reaction` - POST
router.route("/:thoughtId/reactions").post(addReaction);

// Routes to `/api/thoughts/:thoughtId/reaction/:reactionId` - DELETE
router.route("/:thoughtId/reactions/:reactionId").delete(deleteReaction);

// Export module router
module.exports = router;
