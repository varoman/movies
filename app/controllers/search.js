(function () {
    'use strict';
    angular.module('moviesApp')
        .controller('searchController', function ($scope, searchService, APIservice) {
            function init() {
                $scope.searchPage = true;
                $scope.terms = searchService.searchTerms;
                $scope.searchParams  = {};
                $scope.$watch('terms',  (newValue) => {
                    if (newValue) {
                        $scope.searchParams = newValue;
                    }
                });
                $scope.$on('searchEntered', function (e, searchterm) {
                    $scope.searchParams = searchterm;
                });

                $scope.$watch('searchParams', (newTerms) => {
                    if(!$scope.searchParams || !$scope.searchParams.film) return;
                    APIservice.searchByTerms(newTerms).then((searchResults) => {
                        $scope.movies = searchResults.data.results;
                    })
                });
            }

            init();
        })
})();
