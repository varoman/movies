(function () {
    'use strict';
    angular.module('moviesApp')
        .controller('singleController',function ($stateParams, $scope) {
            console.log($scope.$parent.movies = $stateParams.film)
          function init() {
             console.log($stateParams);
             $scope.movies = [$stateParams.film]
              console.log($scope)
          }

          init();

        })
})();
