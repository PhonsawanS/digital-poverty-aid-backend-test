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
const financialcapitalRoute = require('./FinancialCapital/FinancialCapital.route')
const occupationalpropertyRoute = require('./Occupationalproperty/occupationalproperty.route')
const savingRoute = require('./Saving/saving.route')
const nonAGIincomeRoute = require('./NonAGIincome/nonAGIincome.route')
const houseHoldexpensesRoute = require('./Householdexpenses/householdexpenses.route')
const debtRoute = require('./Debt/Debt.router')
const creditsourcesRoute = require('./Creditsources/Creditsources.router')

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
        path: '/memberactivity', 
        route: memberactivityRoute
    },
    {
        path: '/informant',  
        route: informantRoute
    },
    {
        path: '/houseHoldProblem',
        route:houseHoldProblemRoute
    },
    {
        path: '/financialCapital',
        route:financialcapitalRoute
    },
    {
        path: '/occupationalproperty',
        route:occupationalpropertyRoute
    },
    {
        path: '/saving',
        route:savingRoute
    }
    ,
    {
        path: '/nonAGI',
        route:nonAGIincomeRoute
    }
    ,
    {
        path: '/houseHoldexpenses',
        route:houseHoldexpensesRoute
    },
    {
        path: '/debt',
        route:debtRoute
    },
    {
        path: '/creditsources',
        route:creditsourcesRoute
    }
];

RouterList.forEach((route) => {
    router.use(route.path, route.route);
});

module.exports = router;