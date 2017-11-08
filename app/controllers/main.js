(function () {
    'use strict';
    angular.module('moviesApp')
        .controller('mainController',function (APIservice, $scope, $stateParams) {

            function init() {
                const upcomingFilmsCount = 5;
                const genresCount = 13;
                const filmsPerPage = 5;
                getUpcomingFilms(upcomingFilmsCount);
                getGenres(genresCount);
                getMovies(1, filmsPerPage);
            }

            function getUpcomingFilms (limitTo) {
                APIservice.getUpcomings().then((upcomings) => {
                    $scope.upcomingFilms = upcomings.data.results.slice(0, limitTo);
                });
            }

            function getGenres (limitTo) {
                APIservice.getAllGenres().then((genres) => {
                    $scope.genres = genres.data.genres.slice(0, limitTo)
                })
            }  

            function getMovies (page, limitPerPage) {
                $scope.imagePaths = [];
                APIservice.getAllMovies(page).then((movies) => {
                    $scope.movies = movies.data.results.slice(0, limitPerPage);
                    $scope.movies.forEach((movie) => {
                        movie.imagePath = 'https://image.tmdb.org/t/p/w500' + movie.poster_path;
                    });
                    console.log($scope.movies)
                })
            }         

            init();
        })
})();
