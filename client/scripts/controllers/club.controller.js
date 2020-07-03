import { Controller } from 'angular-ecmascript/module-helpers';
import { Chats } from '../../../lib/collections';

export default class ClubCtrl extends Controller {
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
}

ClubCtrl.$name = 'ClubCtrl';