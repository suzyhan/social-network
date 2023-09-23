const router = require('express').Router();

const {
    getThoughts,
    getSingleThought,
    createThought,
    updateThought,
    deleteThought,
    addReaction,
    removeReaction,
} = require('../../controllers/thoughtController');

// GET all thoughts, POST to create a new thought
router.route('/').get(getThoughts).post(createThought);

// GET a single thought by id, PUT to update thought, DELETE to remove thought
router.route('/:thoughtId').get(getSingleThought).put(updateThought).delete(deleteThought);

// POST to add reaction
router.route('/:thoughtId/reactions').post(addReaction);

// DELETE to remove reaction
router.route('/:thoughtId/reactions/:reactionId').delete(removeReaction);

module.exports = router;