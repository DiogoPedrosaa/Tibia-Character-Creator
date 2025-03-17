const express = require('express');
const {getServers,createServer,updateServer,deleteServer} = require('../controllers/serverController');
const router = express.Router();

router.get('/', getServers);
router.post('/', createServer);
router.put('/:id', updateServer);
router.delete('/:id', deleteServer);

module.exports = router;