import { Controller } from 'angular-ecmascript/module-helpers';
import { Chats } from '../../../lib/collections';

export default class MakeEventCtrl extends Controller {
  constructor() {
    super(...arguments);

    this.helpers({
      data() {
        return Chats.find( { eventType: "club" } );
      }
    });
  }

  remove(chat) {
    Chats.remove(chat._id);
  }

  coolstr(){
    //Chats.insert({ "name" : 'this name', "eventType" : 'social' });
}


  myNewEvent(){
   Chats.insert({ "name" : this.myname, "eventType" : this.myeventType, "summary" : this.mysummary, "description" : this.mydescription, "location" : this.mylocation});
  } 
}

MakeEventCtrl.$name = 'MakeEventCtrl';