// Require express router
const router = require('express').Router();

const {
    getAllUsers,
    getUserById,
    createUser,
    updateUsers,
    deleteUsers,
    addFriend,
    deleteFriend,
} = require('../../controllers/userController');

// Routes to `/api/users` - GET and POST 
router
    .route('/')
    .get(getAllUsers)
    .post(createUser);
// post a new user - example data
// {
//     "username": "lernantino",
//     "email": "lernantino@gmail.com"
// }

// Routes to `/api/users/:id` - GET, PUT and DELETE 
router
    .route('/:id')
    .get(getUserById)
    .put(updateUsers)
    .delete(deleteUsers);

// Routes to `/api/users/:userId/friends/:friendId`- POST and DELETE
router
    .route('/:id/friends/:friendId')
    .post(addFriend)
    .delete(deleteFriend);

// Export module router
module.exports = router;

// BONUS remove a user's associated thoughts when deleted

