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


   sendMessage(){
    if (_.isEmpty(this.message)) return;

    this.callMethod( 'newMessage', { //calls the method newMessage from lib/methods.js (accessible to bother server and client) and passes in the following:
      text: this.message,
      type: 'text',
    })

    delete this.message

  }
}

MakeEventCtrl.$name = 'MakeEventCtrl';