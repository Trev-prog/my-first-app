import { Meteor } from 'meteor/meteor';
import { Chats, Messages } from '../lib/collections';

Meteor.methods({
	newMessage(message){

		check(message, { //check that the entered message is of type string
			type: String,
			text: String,
		})

		message.timestamp = new Date(); //assign the new message the current date

		Chats.insert(message); //insert it into the Messages MongoDB
		
//		return messageId;
  },

  updateName(name) {
  if (!this.userId) {
    throw new Meteor.Error('not-logged-in',
      'Must be logged in to update his name.');
  }

  check(name, String);

  if (name.length === 0) {
    throw Meteor.Error('name-required', 'Must provide a user name');
  }

  return Meteor.users.update(this.userId, { $set: { 'profile.name': name } });
}


});