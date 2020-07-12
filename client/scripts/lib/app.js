// Libs
import 'angular-animate';
import 'angular-meteor';
import 'angular-meteor-auth';
import 'angular-sanitize';
import 'angular-ui-router';
import 'ionic-scripts';
import Angular from 'angular';
import Loader from 'angular-ecmascript/module-loader';
import { Meteor } from 'meteor/meteor';

// Modules
import ChatsCtrl from '../controllers/chats.controller';
import ClubCtrl from '../controllers/club.controller';
import AcademicCtrl from '../controllers/academic.controller';
import MakeEventCtrl from '../controllers/makeEvent.controller';
import CalendarFilter from '../filters/calendar.filter';
import ConfirmationCtrl from '../controllers/confirmation.controller';
import LoginCtrl from '../controllers/login.controller'; //added
import ProfileCtrl from '../controllers/profile.controller';
import SettingsCtrl from '../controllers/settings.controller';
import Routes from '../routes';

const App = 'Whatsapp';

// App
Angular.module(App, [
  'angular-meteor',
  'angular-meteor.auth',
  'ionic'
]);

new Loader(App)
  .load(ChatsCtrl)
  .load(ClubCtrl)
  .load(AcademicCtrl)
  .load(ConfirmationCtrl)
  .load(LoginCtrl)
  .load(SettingsCtrl)
  .load(ProfileCtrl)
  .load(MakeEventCtrl)
  .load(CalendarFilter)
  .load(Routes);

// Startup
if (Meteor.isCordova) {
  Angular.element(document).on('deviceready', onReady);
}
else {
  Angular.element(document).ready(onReady);
}

function onReady() {
  Angular.bootstrap(document, [App]);
}
