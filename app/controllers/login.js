
angular
    .module('yapp')
    .controller(
        'LoginCtrl',['$scope', '$location', 'userLoginService', LoginCtrl]);

function LoginCtrl($scope, $location, userLoginService) {


    // $scope.submit = function () {
    //     localStorage.setItem("loggeduser", $scope.loggeduser);
    //
    //
    //
    //     return false;
    // }
    $scope.loginUser = function () {
        console.log("in function ", $scope.loggeduser);


        var dataObj = {
            "userId": $scope.loggeduser,
            "password": $scope.password
        };


        userLoginService.formPostData(dataObj).then(function (response) {
            console.log("in get controller");
            $scope.requestOutput = response.data;
            console.log(response);

        });


        $location.path('/test');

    };


}