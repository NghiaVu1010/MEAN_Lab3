// These are modules that are installed from NPM and are imported into this file
var express = require('express');
var router = express.Router();
const fs = require('fs');

// Create an anonymous function thats assigned to getUsers to READ linked file
var getUsers = () => {
    try {
        var usersString = fs.readFileSync('data/users.json');
        return JSON.parse(usersString);
    } 
    catch (err) {
        return err;
    }
};

// Persist data in file
var saveUser = (users) => {
    fs.writeFileSync('data/users.json', JSON.stringify(users));      
};

// Get a single user by username
var getUser = (username) => {
    // Grab all the users from file and sets it to users
    var users = getUsers();
    // ES6 single-line command
    var filteredUsers = users.filter((user) => user.username === username);
    return filteredUsers[0];
};

// GET home page
// http://localhost:3000/settings
router.get('/', function(req, res, next) {
  res.render('settings', { sheet: 'settings' });
});

router.post("/", function(req, res) {

    let users = getUsers();

    let user = {
        username,
        email
    };

    
    var email = req.body.email;
})

module.exports = router;