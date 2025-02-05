const express = require('express');
require('dotenv').config();
const router = express.Router();
const line = require('@line/bot-sdk');
const LineOAController = require('../../controllers/LineOA/LineOA.controller')

// LINE Config
const config = {
    channelAccessToken: process.env.token,
    channelSecret: process.env.secretcode
};

router
    .get('/test',LineOAController.test)
    .post('/webhook', 
        // line.middleware(config),
        express.json(),
        LineOAController.webHook
    );

    //อันนี้ผ่าน
    // .post('/webhook', express.json(), (req, res) => {
    //     console.log('Headers:', req.headers);
    //     console.log('Body:', req.body);
    //     res.status(200).send('OK');
    // });

module.exports = router;