(function () {
    'use strict';
    angular.module('moviesApp').config(function($stateProvider, $urlRouterProvider) {
      //  $urlRouterProvider.otherwise('404');
        $stateProvider
            .state('main', {
                url: ':films',
                templateUrl: 'app/views/main.html',
                controller: 'mainController',
                params: {
                    films: 'dsdsdsd'
                }
            })
            .state('list', {
                url: '/:films',
                templateUrl: 'app/views/main.html',
                controller: '',
                params: {
                    films: 'kkkk'
                }
            })
    });    
})();
