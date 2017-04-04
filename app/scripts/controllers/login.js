// 'use strict';
//
// /**
//  * @ngdoc function
//  * @name yapp.controller:MainCtrl
//  * @description
//  * # MainCtrl
//  * Controller of yapp
//  */
// angular.module('yapp')
//   .controller('LoginCtrl', function($scope, $location) {
//
//     $scope.submit = function() {
//
//       $location.path('/dashboard');
//
//       return false;
//     }
//
//   });


angular
  .module('yapp')
  .controller(
    'LoginCtrl',['$scope', '$location', 'userLoginService', LoginCtrl]);

function LoginCtrl($scope, $location, userLoginService) {


  $scope.submit = function () {
    localStorage.setItem("loggeduser", $scope.loggeduser);

    $scope.loginUser = function () {
      // console.log("in function ", $scope.loggeduser, $scope.password);

      var dataObj = {
        "email": $scope.loggeduser,
        "password": $scope.password
      };

      userLoginService.formPostData(dataObj).then(function (response) {
        // console.log("in get controller");
        $scope.requestOutput = response.data;
        // console.log(response);
        // console.log(response.data.token);
        if (response.data.token)
        {
          // console.log("in if condition" );
          $location.path('/dashboard');
        }
        else{
          $scope.errorlogin = "Wrong UserId or password! ";
          $location.path('/');
        }

      });

      // $location.path('/UI');

    };
    return false;
  }

}
