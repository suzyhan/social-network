const router = require('express').Router();

const {
    getUsers,
    getSingleUser,
    createUser,
    updateUser,
    deleteUser,
    addFriend,
    removeFriend,
} = require('../../controllers/userController');

// GET all users, POST a new user
router.route('/').get(getUsers).post(createUser);

// GET a single user by id, PUT update user by id, DELETE user by id
router.route('/:userId').get(getSingleUser).put(updateUser).delete(deleteUser);

// POST to add friend, DELETE to remove friend
router.route("/:userId/friends/:friendId").post(addFriend).delete(removeFriend);

module.exports = router;