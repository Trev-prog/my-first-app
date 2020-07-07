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

  newEvent(myname){
  	const newEv = {
  		name: myname,
  		eventType: 'social',
  		summary: 'summary1',
  		description: 'description1',
  		location: 'location1',
  		when: Moment().subtract(1, 'hours').toDate(),
  		picture: 'https://randomuser.me/api/portraits/thumb/men/1.jpg'
  	};
  	Chats.insert(newEv);
  },

});