const express = require('express');
const router = express.Router();

const authRoute = require('./auth/auth.route')
const memberactivityRoute = require('./MemberActivitie/memberActivitie.route');

const RouterList = [
    {
        path: '/auth',
        route: authRoute
    },
    {
        path: '/memberactivity',  // เพิ่มเส้นทางใหม่
        route: memberactivityRoute
    }
];

RouterList.forEach((route) => {
    router.use(route.path, route.route);
});

module.exports = router;