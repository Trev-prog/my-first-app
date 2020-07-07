import { _ } from 'meteor/underscore';
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


  myNewEvent(){
   
    if (_.isEmpty(this.myname)) return this.handleEmpty("name");
    if (_.isEmpty(this.myeventType)) return this.handleEmpty("event type");
    if (_.isEmpty(this.mysummary)) return this.handleEmpty("event summary");
    if (_.isEmpty(this.mydescription)) return this.handleEmpty("event description");
    if (_.isEmpty(this.mylocation)) return this.handleEmpty("event location");
    this.handleEmpty();

    Chats.insert({ "name" : this.myname, "eventType" : this.myeventType, "summary" : this.mysummary, "description" : this.mydescription, "location" : this.mylocation});
    delete this.myname
    delete this.myeventType
    delete this.mysummary
    delete this.mylocation
    delete this.mydescription
  }

  handleEmpty(myerr){
   this.$ionicPopup.alert({
      title: 'Insufficient information provided!',
      template: 'Please fill in the '  + myerr + ' field',
      okType: 'button-positive button-clear'
    }); 
  } 


}

//import underscore

MakeEventCtrl.$name = 'MakeEventCtrl';
MakeEventCtrl.$inject = ['$ionicPopup'];