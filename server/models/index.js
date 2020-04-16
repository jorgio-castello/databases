var db = require('../db');

module.exports = {
  messages: {
    get: function (callback) {
      // Pass the callback from the controller file into this function as a parameter
      //select messages.text, messages.username, messages.room from messages
      //Figure out to store this data into an array, and in JSON format
      //return this data to controllers

      //Declare a query - regular mysql syntax for getting the relevant colummns from the messages table
      let query = 'select * from messages';
      //db.query - use the query we described, pass in the node-style err / success callback
      db.query(query, (err, messages) => {
        //on err, we should invoke the callback on the err
        if (err) {
          callback(err);
        } else {
          //on success, we should invoke the callback on the messages from the database
          callback(null, messages);
        }
      });
    },


    post: function ({ messageText, user, room }, callback) {
      let query = `insert into messages(messageText, user, room) values("${messageText}", "${user}", "${room}");`;
      //query = insert the message into our database -
      db.query(query, (err, success) => {
        if (err) {
          callback(err);
        } else {
          callback(null, success);
        }
      });
      //db func - callback on the error or callback on success
    } // a function which can be used to insert a message into the database
    //insert into database and return an error / success
  },

  users: {
    // Ditto as above.
    get: function () {},
    post: function ({userName}, callback) {
      let query = `insert into users(userName) values("${userName}");`;

      db.query(query, (err, success) => {
        if (err) {
          callback(err);
        } else {
          callback(null, success);
        }
      });
    }
  }
};

