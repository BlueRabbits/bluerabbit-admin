'use strict';

/**
 * Route configuration for the RDash module.
 */
angular.module('RDash').config(['$stateProvider', '$urlRouterProvider',
    function($stateProvider, $urlRouterProvider) {

        // For unmatched routes
        $urlRouterProvider.otherwise('/');

        // Application routes
        $stateProvider
          .state('department', {
                url: '/department',
                templateUrl: 'templates/page_department.html'
            })
            .state('category', {
                url: '/category',
                templateUrl: 'templates/page_category.html'
            })
            .state('addProduct', {
                url: '/addProduct',
                templateUrl: 'templates/page_addProducts.html'
            })
            .state('addTodayDeals', {
                url: '/addTodayDeals',
                templateUrl: 'templates/page_todayDeals.html'
            });
    }
]);
