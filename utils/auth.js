// Note: email and password values hard-coded for demo only!
var auth = {
    authorize: function (username, password, users) {
      var validUser = users.filter((user) => {
        return user.username === username && user.password === password;
      });
  
      if (validUser.length === 1) {
        return true;
      }
      return false;
    }
  };
  
module.exports = {
  auth
};