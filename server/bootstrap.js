import Moment from 'moment';
import { Meteor } from 'meteor/meteor';
import { Chats, Messages } from '../lib/collections';

Meteor.startup(function() {
  //if (Chats.find().count() !== 0) return;
  Chats.remove({});
  Messages.remove({});

  const messages = [
    {
      text: 'You on your way?',
      timestamp: Moment().subtract(1, 'hours').toDate()
    },
    {
      text: 'Social',
      timestamp: Moment().subtract(2, 'hours').toDate()
    },
    {
      text: 'I should buy a boat',
      timestamp: Moment().subtract(1, 'days').toDate()
    },
    {
      text: 'Look at my mukluks!',
      timestamp: Moment().subtract(4, 'days').toDate()
    },
    {
      text: 'This is wicked good ice cream.',
      timestamp: Moment().subtract(2, 'weeks').toDate()
    }
  ];

  messages.forEach((m) => {
    Messages.insert(m);
  });

  const chats = [
    {
      name: 'Ping Pong Tournament',
      eventType: 'social',
      summary: 'We need 6 more players!',
      description: 'A3 will be hosting a ping pong tournament Friday night ... blah blah blah',
      location: 'A3 Collab Room',
      when: Moment().add(1, 'hours').toDate(),
      picture: '../public/pingpong.jpg'
    },
    {
      name: 'Arabic Tutoring Session',
      eventType: 'academic',
      summary: 'Review before WPR 2',
      description: 'description goes here...blah blah blah',
      location: 'Jefferson Hall 2nd Floor',
      when: Moment().add(5, 'days').toDate(),
      picture: 'https://randomuser.me/api/portraits/thumb/men/1.jpg'
    },
    {
      name: 'Spectrum Meeting',
      eventType: 'club',
      summary: 'Come hang out!',
      description: 'description goes here...blah blah blah',
      location: 'WH 5002',
      when: Moment().add(10, 'hours').toDate(),
      picture: 'https://randomuser.me/api/portraits/thumb/men/1.jpg'
    },
    {
      name: 'Bible Study!',
      eventType: 'social',
      summary: 'Come talk about God',
      description: 'description goes here...blah blah blah',
      location: 'D1 Collab Room',
      when: Moment().add(15, 'minutes').toDate(),
      picture: 'https://randomuser.me/api/portraits/thumb/men/1.jpg'
     },
    {
      name: 'Ethics Debate Meeting',
      eventType: 'club',
      summary: 'Come learn about debating ethically!',
      description: 'description goes here...blah blah blah',
      location: 'LH 242',
      when: Moment().add(2, 'hours').toDate(),
      picture: 'https://randomuser.me/api/portraits/thumb/men/1.jpg'
     }
  ];

  chats.forEach((chat) => {
    const message = Messages.findOne({ chatId: { $exists: false } });
    chat.lastMessage = message;
    const chatId = Chats.insert(chat);
    Messages.update(message._id, { $set: { chatId } });
  });
});