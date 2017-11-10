(function () {
    'use strict';
    angular.module('moviesApp')
        .constant('FilmsPerPage', 5)
        .controller('mainController', function (APIservice, $scope, $stateParams, FilmsPerPage, detailsService, $rootScope) {
            function init() {
                getMovies(1, FilmsPerPage);
                $rootScope.details = detailsService;
            }

            function getMovies (page, limitPerPage) {
                $scope.imagePaths = [];
                APIservice.getAllMovies(page).then((movies) => {
                    $scope.movies = movies.data.results.slice(0, limitPerPage);
                    detailsService.addDetails($scope.movies, $scope);
                    $scope.$broadcast('gotMovies', {pageCount: movies.data.total_pages, getter: APIservice.getAllMovies});
                });
            }

            init();
        })
})();



