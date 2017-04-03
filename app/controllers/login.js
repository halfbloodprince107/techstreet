
angular
    .module('yapp')
    .controller(
        'LoginCtrl',['$scope', '$location', 'userLoginService', LoginCtrl]);

function LoginCtrl($scope, $location, userLoginService) {


    $scope.submit = function () {
        localStorage.setItem("loggeduser", $scope.loggeduser);
        $scope.loginUser = function () {
            console.log("in function ", $scope.loggeduser);


            var dataObj = {
                "email": $scope.loggeduser,
                "password": $scope.password
            };

            userLoginService.formPostData(dataObj).then(function (response) {
                console.log("in get controller");
                $scope.requestOutput = response.data;
                console.log(response);
                console.log(response.data.token);
                if (response.data.token)
                {
                   console.log("in if condition" )
                    $location.path('/UI');
                };

            });


            // $location.path('/UI');

        };
        return false;




    }


}