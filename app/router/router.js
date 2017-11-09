(function () {
    'use strict';
    angular.module('moviesApp').config(function($stateProvider, $urlRouterProvider, $locationProvider) {
        $urlRouterProvider.otherwise('');
      //  $locationProvider.html5Mode(true);
        $stateProvider
            .state('main', {
                url: '',
                templateUrl: 'app/views/main.html',
                controller: 'mainController',
            })

            .state('list', {
                url: '/:listUrl',
                templateUrl: 'app/views/main.html',
                controller: 'listController',
                params: {
                    film: null
                }
            })

            // .state('lists', {
            //     url: '/:list',
            //     templateUrl: 'app/views/main.html',
            //     controller: 'listController',
            //     // params: {
            //     //     list: null
            //     // }
            // })

    });    
})();
