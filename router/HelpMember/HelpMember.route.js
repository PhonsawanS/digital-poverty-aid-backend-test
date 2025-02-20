const express = require('express');
const router = express.Router();
const HelpMemberController = require('../../controllers/HelpMember.controller');
const { auth } = require('../../middleware/auth');

router
    //CRUD
    .get('/list',auth,HelpMemberController.list)
    .post('/create',auth,HelpMemberController.create)
    .delete('/delete/:id',auth,HelpMemberController.deleteHelp)
    .get('/findOne/:id',auth,HelpMemberController.findOne)

    //Ohters
    .get('/member/search',auth,HelpMemberController.searchMemberForHelp)
    .get('/find-help/:memberId',auth,HelpMemberController.findHelpMember)

module.exports = router