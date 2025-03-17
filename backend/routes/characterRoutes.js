const express = require('express');
const {getCharacters, createCharacter, deleteCharacter, updateCharacter} = require('../controllers/characterController')
const router = express.Router();

router.get('/', getCharacters);
router.post('/', createCharacter);
router.delete('/:id', deleteCharacter);
router.patch('/:id', updateCharacter);

module.exports = router;