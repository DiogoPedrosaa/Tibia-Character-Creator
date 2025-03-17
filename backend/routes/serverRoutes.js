const express = require('express');
const {getServer,createServer,updateServer,deleteServer} = require('../controllers/serverController');
const router = express.router();

router.get('/', getServer);
router.post('/', createServer);
router.put('/:id', updateServer);
router.delete('/:id', deleteServer);

module.exports = router;