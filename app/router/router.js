(function () {
    'use strict';
    angular.module('moviesApp').config(function($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('');
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
            .state('genres', {
                url: '/genres/:genre',
                templateUrl: 'app/views/main.html',
                controller: 'genresController',
                params: {
                    genreId: ''
                }
            })

            .state('search', {
                url: '/search',
                templateUrl: 'app/views/main.html',
                controller: 'searchController'
            })
    });   
})();
