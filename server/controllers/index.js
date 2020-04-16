var models = require('../models');

module.exports = {
  messages: {
    get: function (req, res) { // a function which handles a get request for all messages
      //Invoke the models func to query our database for all messages - we may need to implement this as a promise
      //Handle the error case - using catch, we would send back a res.statusCode of 404
      //Handle the success case - we receive an array of message objects from the database, and we will need to JSON.stringify it, and then we want to send back a response of 200 along with the stringified message data

      //Invoke our models.messages.get((err, messagesData) => { we want to invoke the callback either on an err or the data
      models.messages.get((err, messages) => {
        if (err) {
          //error handling logic - responding with a 404, we can probably console.log something for us to see
          console.log(err);
          res.end('error code');
        } else {
          //successHandling logic - respond with a 200, we should be sending back the data in the format the client expects
          console.log(messages);
          res.end('working correctly');
        }
      });
      //});
    },

    post: function (req, res) {
      // console.log(req.body);
      // res.end();
      models.messages.post(req.body, (err, success) => {
        if (err) {
          console.log(err);
          res.end();
        } else {
          console.log('succesfully completed post');
          res.end();
        }
      });
    } // a function which handles posting a message to the database
    //In the req object, the message that we're trying to create will exist, we may or may not receive information
    //about user / room,
    //Obtain the data from the req object, and pass it to the model func for insertion - using promises
    //If the message is successfully stored in database, send back 201 otherwise send back an error
  },

  users: {
    // Ditto as above
    get: function (req, res) {},
    //To filter the messages in the database and return messages that were created by a particular user
    post: function (req, res) {}
    // this will be used to create a user, we will call model func for insertion into the database
  }
};

