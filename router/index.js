const express = require('express');
const router = express.Router();

const authRoute = require('./auth/auth.route')
const memberactivityRoute = require('./MemberActivitie/memberActivitie.route');
const informantRoute = require('./Informant/informant.route')

const RouterList = [
    {
        path: '/auth',
        route: authRoute
    },
    {
        path: '/memberactivity',  // เพิ่มเส้นทางใหม่
        route: memberactivityRoute
    },
    {
        path: '/informant',  // เพิ่มเส้นทางใหม่
        route: informantRoute
    }
];

RouterList.forEach((route) => {
    router.use(route.path, route.route);
});

module.exports = router;