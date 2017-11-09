(function () {
    'use strict';
    angular.module('moviesApp').config(function($stateProvider, $urlRouterProvider) {
      //  $urlRouterProvider.otherwise('404');
        $stateProvider
            .state('main', {
                url: ':films',
                templateUrl: 'app/views/main.html',
                controller: 'mainController',

            })
            .state('single', {
                url: '/:filmUrl',
                templateUrl: 'app/views/main.html',
                controller: 'singleController',
                params: {
                    film: null
                }
            })
    });    
})();
