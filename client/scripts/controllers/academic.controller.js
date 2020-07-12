import { Meteor } from 'meteor/meteor';

import { Controller } from 'angular-ecmascript/module-helpers';
import { Chats } from '../../../lib/collections';

export default class ChatsCtrl extends Controller {
  constructor() {
    super(...arguments);

    if(Meteor.user()) this.thisVar = "You are logged in";
    if(!Meteor.user()) this.thisVar = "You are not logged in";

    this.helpers({
      data() {
        return Chats.find( { eventType: "academic" } );
      }
    });
  }



  remove(chat) {
    Chats.remove(chat._id);
  }
}

ChatsCtrl.$name = 'AcademicCtrl';