var db = require('../db');

module.exports = {
  messages: {
    get: function (callback) {
      // Pass the callback from the controller file into this function as a parameter
      //select messages.text, messages.username, messages.room from messages
      //Figure out to store this data into an array, and in JSON format
      //return this data to controllers

      //Declare a query - regular mysql syntax for getting the relevant colummns from the messages table
      let query = 'select messages.messageText, messages.user, messages.room from messages';
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


    post: function (message, callback) {
      //query = insert the message into our database -
      //db func - callback on the error or callback on success
    } // a function which can be used to insert a message into the database
    //insert into database and return an error / success
  },

  users: {
    // Ditto as above.
    get: function () {},
    post: function () {}
  }
};

