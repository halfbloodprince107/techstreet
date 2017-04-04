'use strict';

/**
 * @ngdoc function
 * @name yapp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of yapp
 */


// angular.module('yapp')
//   .controller('DashboardCtrl', function($scope, $state) {
//
//     $scope.$state = $state;
//     $scope.loggeduser = localStorage.getItem("loggeduser");
//     console.log("ddddddddddashboard", $scope.loggeduser);
//
//   });


angular
  .module('yapp')
  .controller(
    'DashboardCtrl', ['$scope', '$state', '$location', DashboardCtrl]);

function DashboardCtrl($scope, $state, $location) {

  if (localStorage.getItem("loggeduser") ==""){

    // console.log("no user logged in");
    $location.path('/');
  }

  $scope.$state = $state;
  $scope.loggeduser = localStorage.getItem("loggeduser");
  // console.log("ddddddddddashboard", $scope.loggeduser);

  $scope.logoutUser = function () {
    localStorage.setItem("loggeduser", "");

    return false;
  }
}



