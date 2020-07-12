import { Meteor } from 'meteor/meteor';
import { Controller } from 'angular-ecmascript/module-helpers';
 
export default class SettingsCtrl extends Controller {
  constructor() {
    super(...arguments);
    
    if(Meteor.user()) this.myVar = "true";
    if(!Meteor.user()) this.myVar = "false";
    
 }
 

  logout() {
    Meteor.logout((err) => {
      if (err) return this.handleError(err);
      this.$state.go('tab.login');
    })
  }
 
  handleError (err) {
    this.$log.error('Settings modification error', err);
 
    this.$ionicPopup.alert({
      title: err.reason || 'Settings modification failed',
      template: 'Please try again',
      okType: 'button-positive button-clear'
    });
  }
}
 
SettingsCtrl.$inject = ['$state', '$ionicPopup', '$log'];
