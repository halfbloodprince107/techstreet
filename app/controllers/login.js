'use strict';

/**
 * @ngdoc function
 * @name app.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of yapp
 */
angular.module('yapp')
  .controller('LoginCtrl', function($scope, $location) {

    $scope.submit = function() {
    	localStorage.setItem("loggeduser", $scope.loggeduser);

        $scope.token = "aaa111";

        localStorage.setItem("userToken", $scope.userToken);

      $location.path('#');

      return false;
    }

  });
