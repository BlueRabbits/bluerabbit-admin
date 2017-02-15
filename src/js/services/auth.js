'use strict';
angular.module('RDash').factory('Auth', function($http, $window, $cookieStore) {
  var BASE_URL = "http://ec2-35-164-152-22.us-west-2.compute.amazonaws.com:9000";
//  var BASE_URL = "http://ec2-54-187-15-116.us-west-2.compute.amazonaws.com:9000";
  //var BASE_URL = "http://localhost:9000";
  //var BASE_URL = "http://192.168.0.84:9000";
  //  var authToken = 'Bearer '+$cookieStore.get('token');
  //  var userId = $cookieStore.get('userId');
    //console.log("serv",authToken);
    //var authToken = localStorage.getItem("authToken");
    //$http.defaults.headers.common['Authorization'] = 'Bearer ' + authToken;

  return {
    register : function(inputs) {
      return $http.post(BASE_URL + '/api/users', inputs, {
      headers: {
        'Content-Type': 'application/json'
        }
      });
    },

    addDepartment : function (inputs) {
      return $http.post(BASE_URL + '/api/departments', inputs,{
        header: {
          'Content-Type': 'application/json'
        }
      });
    }
  };
});
