CREATE DATABASE chat;

USE chat;

CREATE TABLE messages (
  /* Describe your table here.*/
  messageId INT auto_increment primary key,
  messageText VARCHAR(255),
  user VARCHAR(30),
  room VARCHAR(30),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);


/* Create other tables and define schemas for them here! */
CREATE  TABLE users (
  userId int auto_increment primary key,
  userName VARCHAR(30)
);



/*  Execute this file from the command line by typing:
 *    :
 *  to create the database and the tables.*/

-- 1) Lookup in the user table, for the user that is present in the user property of message, and obtain the key