const express = require('express');
const router = express.Router();
const HelpMemberController = require('../../controllers/HelpMember.controller');
const { auth } = require('../../middleware/auth');

router
    .get('/list',auth,HelpMemberController.list)
    .post('/create',auth,HelpMemberController.create)
    .delete('/delete/:id',auth,HelpMemberController.deleteHelp)
    .get('/findOne/:id',auth,HelpMemberController.findOne)

module.exports = router