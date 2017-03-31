'use strict';

/**
 * @ngdoc overview
 * @name yapp
 * @description
 * # yapp
 *
 * Main module of the application.
 */
var cbapp = angular
  .module('yapp', [
    'ui.router',
    'ngAnimate',
  ])
  .config(function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.when('/dashboard', '/dashboard/overview');
    $urlRouterProvider.otherwise('/login');

    $stateProvider
      .state('base', {
        abstract: true,
        url: '',
        templateUrl: 'views/base.html'
      })
        .state('login', {
            url: '/login',
            parent: 'base',
            template: '<h1>ghrbdgbnxjhcjnjhhbchcghcghcghcg</h1>',
            controller: 'LoginCtrl'
        })
        .state('test', {
            url: '/test',
            parent: 'base',
            template: '<h1>tthhiss is dummy tempplate</h1>',
            // controller: 'LoginCtrl'
        })



  });
