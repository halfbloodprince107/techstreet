// /**
//  * Created by consultadd on 30/3/17.
//  */
// (function () {
//     'use strict';
//     angular.module('yapp').factory('user_token_service', user_token_service);
//     function user_token_service($http) {
//         return {
//
//             getdata: function () {
//
//
//                 $.getJSON("../../data/userData.json", function (data) {
//                     console.log("abcdef-----------------------------------")
//                     return {"msg":"service"}
//                     // var items = [];
//                     //
//                     // $.each(data, function (key, val) {
//                     //     var token = data.token;
//                     //     console.log(token, userName, data.userName);
//                     //     if (data.userName == userName) {
//                     //         alert("welcome!! " + userName + "and the token is" + token);
//                     //     }
//                     //     else {
//                     //         // $.validator.messages.required = 'Username Password do not match';
//                     //         alert("error")
//                     //     }
//                     //
//                     //
//                     // });
//
//
//                 });
//             }
//
//
//
//
//         }
//     }})
//
//

(function () {
    'use strict';
    angular.module('yapp').factory('userLoginService', userLoginService);
    function userLoginService($http) {
        return {


            formPostData: function (dataObj) {
                console.log("in post service");
                console.log(dataObj);

                return $http.post("https://reqres.in/api/users", dataObj);
            }


        }
    }
}());
