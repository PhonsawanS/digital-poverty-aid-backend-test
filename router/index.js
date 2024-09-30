const express = require('express');
const router = express.Router();

const authRoute = require('./auth/auth.route')
const formRoute = require('./form/form.route')
const householdRoute = require('./household/household.route')
const memberHouseRoute = require('./memberHousehold/member.household.route')
const teamServeyRoute = require('./teamservey/teamservey.route')
const memberactivityRoute = require('./MemberActivitie/memberActivitie.route');
const informantRoute = require('./Informant/informant.route')
const houseHoldProblemRoute = require('./HouseHoldProblem/houseHoldProblem.route')
const humancapitalRoute = require('./Humancapital/humancapital.route')
const socialWelfareRoute = require('./SocialWelfare/SocialWelfare.route')

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
    },{
        path: '/memberactivity',  // เพิ่มเส้นทางใหม่
        route: memberactivityRoute
    },
    {
        path: '/informant',  // เพิ่มเส้นทางใหม่
        route: informantRoute
    },
    {
        path: '/houseHoldProblem',
        route:houseHoldProblemRoute
    },
    {
        path: '/human-capital',
        route:humancapitalRoute
    },
    {
        path: '/social-welfare',
        route:socialWelfareRoute
    }
];

RouterList.forEach((route) => {
    router.use(route.path, route.route);
});

module.exports = router;