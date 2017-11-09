(function () {
    'use strict';
    angular.module('moviesApp')
        .controller('listController',function ($stateParams, $scope) {
            function init() {
                if ($stateParams.film) {
                    sessionStorage.setItem('film', JSON.stringify($stateParams.film));
                }
                $scope.movies = [JSON.parse(sessionStorage.getItem('film'))];
            }

            init();

        })
})();
