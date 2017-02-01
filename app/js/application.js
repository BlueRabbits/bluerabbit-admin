/*================================================================
App adminPanel
==================================================================*/
'use strict';

var app = angular.module('adminPanel', ['ngRoute']);

app.config(['$routeProvider', function($routeProvider) {
    $routeProvider
    	.when('', {
            controller: '',
            templateUrl: ''
    	})

    	.otherwise({ redirectTo: '/' });
}]);
