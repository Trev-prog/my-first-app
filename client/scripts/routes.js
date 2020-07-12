import { _ } from 'meteor/underscore';
import { Config, Runner } from 'angular-ecmascript/module-helpers';

import chatsTemplateUrl from '../templates/chats.html';
import clubTemplateUrl from '../templates/club.html';
import tabsTemplateUrl from '../templates/tabs.html';
//added
import confirmationTemplateUrl from '../templates/confirmation.html';
import loginTemplateUrl from '../templates/login.html';
import profileTemplateUrl from '../templates/profile.html';

import settingsTemplateUrl from '../templates/settings.html';

import makeEventTemplateUrl from '../templates/makeEvent.html';
import academicTemplateUrl from '../templates/academic.html';

class RoutesConfig extends Config {

  constructor() {
    super(...arguments);
 
    this.isAuthorized = ['$auth', this.isAuthorized.bind(this)];
  } //added

  configure() {
    this.$stateProvider
      .state('tab', {
        url: '/tab',
        abstract: true,
        templateUrl: tabsTemplateUrl,
      })
      .state('tab.chats', {
        url: '/chats',
        views: {
          'tab-chats': {
            templateUrl: chatsTemplateUrl,
            controller: 'ChatsCtrl as chats'
          }
        }
      })

      .state('tab.club', {
        url: '/club',
        views: {
          'tab-club': {
            templateUrl: clubTemplateUrl,
            controller: 'ClubCtrl as chats' //breaks here
          }
        }
      })

      .state('tab.makeEvent', {
        url: '/makeEvent',
        views: {
          'tab-makeEvent': {
            templateUrl: makeEventTemplateUrl,
            controller: 'MakeEventCtrl as chat', //breaks here
            resolve: {
              user: this.isAuthorized
            }
          }
        }
      })

      .state('tab.academic', {
        url: '/academic',
        views: {
          'tab-academic': {
            templateUrl: academicTemplateUrl,
            controller: 'AcademicCtrl as chats' //breaks here
          }
        }
      })

      //added
      .state('tab.login', {
        url: '/login',
        views: {
          'tab-login':{
            templateUrl: loginTemplateUrl,
            controller: 'LoginCtrl as logger'
          }
        }
      })
      .state('confirmation', {
        url: '/confirmation/:phone',
        templateUrl: confirmationTemplateUrl,
        controller: 'ConfirmationCtrl as confirmation'
      })
      .state('tab.profile', {
        url: '/profile',
        views: {
          'tab-profile': {
              templateUrl: profileTemplateUrl,
              controller: 'ProfileCtrl as profile',
              resolve: {
                user: this.isAuthorized
              }
          }
        }
      })
      .state('tab.settings', {
        url: '/settings',
        views: {
          'tab-settings': {
            templateUrl: settingsTemplateUrl,
            controller: 'SettingsCtrl as settings',
          }
        }
      })//added

      ;

    this.$urlRouterProvider.otherwise('tab/chats');
  }
    isAuthorized($auth) {
     return $auth.awaitUser();
   }
}

RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
 
class RoutesRunner extends Runner {
  run() {
    this.$rootScope.$on('$stateChangeError', (...args) => {
      const err = _.last(args);
 
      if (err === 'AUTH_REQUIRED') {
        this.$state.go('tab.login');
      }
    });
  }
}
 
RoutesRunner.$inject = ['$rootScope', '$state'];
 
export default [RoutesConfig, RoutesRunner];