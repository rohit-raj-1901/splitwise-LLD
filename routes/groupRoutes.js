const express = require('express');
const { createGroup, addUserToGroup, getGroup } = require('../controllers/groupController');
const router = express.Router();

router.post('/', createGroup);
router.post('/addUser', addUserToGroup);
router.get('/:id', getGroup);

module.exports = router;
