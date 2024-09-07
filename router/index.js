const express = require('express');
const router = express.Router();

const authRoute = require('./auth/auth.route')

const RouterList = [
    {
        path: '/auth',
        route: authRoute
    },
    
];

RouterList.forEach((route) => {
    router.use(route.path, route.route);
});

module.exports = router;