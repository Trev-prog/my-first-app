import { Config } from 'angular-ecmascript/module-helpers';

import chatsTemplateUrl from '../templates/chats.html';
import clubTemplateUrl from '../templates/club.html';
import tabsTemplateUrl from '../templates/tabs.html';
import makeEventTemplateUrl from '../templates/makeEvent.html';
import academicTemplateUrl from '../templates/academic.html';

export default class RoutesConfig extends Config {
  configure() {
    this.$stateProvider
      .state('tab', {
        url: '/tab',
        abstract: true,
        templateUrl: tabsTemplateUrl
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
            controller: 'MakeEventCtrl as chat' //breaks here
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
      });

    this.$urlRouterProvider.otherwise('tab/chats');
  }
}

RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];