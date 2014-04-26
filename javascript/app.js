/*
Javascript for Routing The Simpsons Character Angular Application
Author: Brent Icenogle
Updated: April 25, 2014
*/

//Module Definition
var simpsonsApp = angular.module('simpsonsApp', ['ngRoute', 'SimpsonsControllers', 'ngAnimate']);

//Routing Definition
simpsonsApp.config(['$routeProvider',
  function ($routeProvider) {
      $routeProvider.
        when('/characters', {
            templateUrl: 'html/characters.html',
            controller: 'CharactersController'
        }).
        when('/about', {
            templateUrl: 'html/about.html',
            controller: 'CharactersController'
        }).
        otherwise({
            redirectTo: '/characters'
        });
  }]);