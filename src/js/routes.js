'use strict';

/**
 * Route configuration for the RDash module.
 */
angular.module('RDash').config(['$stateProvider', '$urlRouterProvider',
    function($stateProvider, $urlRouterProvider) {

        // For unmatched routes
        $urlRouterProvider.otherwise('/login');

        // Application routes
        $stateProvider
          .state('login', {
                url: '/login',
                templateUrl: 'templates/page_login.html'
            })
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
            })
            .state('updateCategory', {
                url: '/updateCategory',
                templateUrl: 'templates/page_updateCategory.html'
            })
            .state('UpdateTodayDeal', {
                url: '/UpdateTodayDeal',
                templateUrl: 'templates/page_UpdateTodayDeal.html'
            })
            .state('updateProduct', {
                url: '/updateProduct',
                templateUrl: 'templates/page_updateProduct.html'
            })
            .state('orderManagement', {
                url: '/orderManagement',
                templateUrl: 'templates/page_orderManagement.html'
            });
    }
]);
