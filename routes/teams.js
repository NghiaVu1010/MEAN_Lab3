// These are modules that are installed from NPM and are imported into this file
const express = require('express');
const teamsRouter = express.Router();
const fs = require('fs');

function getMatchingTeamsByLeague(leagueCode, data)
{
    let matches = data.filter( t => t.League == leagueCode );
    return matches;
}

// GET home page
// http://localhost:3000/teams
teamsRouter.get('/', function(req, res, next) {
    let session = req.session.username;

    if(session)
        res.render('teams', { sheet: 'teams' });
    else
        res.redirect('/users/register');
});

// GET all teams data
// http://localhost:3000/teams/data
teamsRouter.get('/data', function(req, res, next) {
    try {
        res.end(fs.readFileSync("./data/teams.json"));
    }
    catch(err) {
        res.end("[]");
    }
});

// GET all teams by divisions
// http://localhost:3000/teams/data
teamsRouter.get('/data/byleague/:id', function(req, res, next) {
    let id = req.params.id;
    let data;

    try {
        data = JSON.parse(fs.readFileSync("./data/teams.json"));
    }
    catch(err) {
        res.end("[]");
    }

    let matches = getMatchingTeamsByLeague(id, data);
    res.end(JSON.stringify(matches));
});

module.exports = teamsRouter;