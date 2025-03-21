const express = require('express');
const {getCharacters, createCharacter, deleteCharacter, updateCharacter} = require('../controllers/characterController')
const router = express.Router();
const authMiddleware = require('../middlewares/authMiddleware');

router.get('/',authMiddleware, getCharacters);
router.post('/',authMiddleware, createCharacter);
router.delete('/:id',authMiddleware ,deleteCharacter);
router.patch('/:id',authMiddleware, updateCharacter);

module.exports = router;