const express = require('express');
const router = express.Router();

const authRoute = require('./auth/auth.route')
const formRoute = require('./form/form.route')
const householdRoute = require('./household/household.route')
const memberHouseRoute = require('./memberHousehold/member.household.route')
const teamServeyRoute = require('./teamservey/teamservey.route')

const RouterList = [
    {
        path: '/auth',
        route: authRoute
    },
    {
        path: '/form',
        route: formRoute
    },
    {
        path: '/house-hold',
        route: householdRoute
    },
    {
        path: '/member-household',
        route: memberHouseRoute
    },
    {
        path: '/team-servey',
        route: teamServeyRoute
    },
    
];

RouterList.forEach((route) => {
    router.use(route.path, route.route);
});

module.exports = router;