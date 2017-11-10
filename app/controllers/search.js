(function () {
    'use strict';
    angular.module('moviesApp')
        .controller('searchController', function ($scope, searchService, APIservice, detailsService) {
            function init() {
                $scope.notPaginated = true;
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
                    APIservice.searchByTerms(newTerms, 1).then((searchResults) => {
                        $scope.movies = searchResults.data.results;
                        detailsService.addDetails($scope.movies, $scope);
                    });
                });
            }

            init();
        })
})();
