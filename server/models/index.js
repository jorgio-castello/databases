var db = require('../db');

module.exports = {
  messages: {
    get: function () {}, // a function which produces all the messages
    //select messages.text, messages.username, messages.room from messages
    //Figure out to store this data into an array, and in JSON format
    //return this data to controllers
    post: function () {} // a function which can be used to insert a message into the database
    //insert into database and return an error / success
  },

  users: {
    // Ditto as above.
    get: function () {},
    post: function () {}
  }
};

