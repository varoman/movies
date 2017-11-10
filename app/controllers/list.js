(function () {
    'use strict';
    angular.module('moviesApp')
        .controller('listController',function ($stateParams, $scope, APIservice, FilmsPerPage, $location, detailsService) {
            function init() {
                if ($stateParams.film) {
                    sessionStorage.setItem('film', JSON.stringify($stateParams.film));
                }
                $scope.movies = [JSON.parse(sessionStorage.getItem('film'))];

                if ($location.path() === '/latest') {
                    getLatestFilms(FilmsPerPage)
                } else if ($location.path() === '/top-rated') {
                    getTopRated(1, 0, FilmsPerPage);
                } else if ($location.path() === '/most-commented') {
                    getTopRated(1, FilmsPerPage, FilmsPerPage + FilmsPerPage);
                }

            }

            function getLatestFilms (limitTo) {
                if (!$scope.movies) return;
                APIservice.getLatestFilms().then((films) => {
                    $scope.movies = films.data.results.slice(FilmsPerPage, FilmsPerPage + limitTo);
                    detailsService.addDetails($scope.movies, $scope);
                 });

            }

            function getTopRated (page, start, limitTo) {
                APIservice.getTopRatedFilms().then((films) => {
                     $scope.movies = films.data.results.slice(start, limitTo);
                    detailsService.addDetails($scope.movies, $scope);
                });
            }

            $scope.$on('genreSelected', (event, genreId) => {
                APIservice.getFilmsById(genreId).then((collection) => {
                    setTimeout(() => {
                            $scope.movies = collection.data.results.slice(0, FilmsPerPage);
                            detailsService.addDetails($scope.movies, $scope)
                    });
                });
            });

            init();

        })
})();
