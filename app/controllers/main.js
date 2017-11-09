(function () {
    'use strict';
    angular.module('moviesApp')
        .controller('mainController',function (APIservice, $scope) {

            function init() {
                const upcomingFilmsCount = 5;
                const filmsPerPage = 5;
                getUpcomingFilms(upcomingFilmsCount);
               // getGenres(genresCount);
                getMovies(1, filmsPerPage);
            }

            function getUpcomingFilms (limitTo) {
                APIservice.getUpcomings().then((upcomings) => {
                    $scope.upcomingFilms = upcomings.data.results.slice(0, limitTo);
                });
            }

            function getMovies (page, limitPerPage) {
                $scope.imagePaths = [];
                APIservice.getAllMovies(page).then((movies) => {
                    $scope.movies = movies.data.results.slice(0, limitPerPage);
                    Promise.all(getMoviesDetailed($scope.movies)).then((detailedMovies) => {
                        $scope.$apply(() => {
                            for (let i = 0; i < $scope.movies.length; i++) {
                                $scope.movies[i].genres = detailedMovies[i].data.genres;
                                $scope.movies[i].productionCompanies = detailedMovies[i].data.production_companies;
                            }
                        });
                    })
                });
            }

            function getMoviesDetailed(moviesCollection) {
                let promises = [];
                moviesCollection.map((movie) => {
                    promises.push(new Promise((resolve) => {
                        resolve(APIservice.getSingleMovie(movie.id));
                     }));
                });
                return promises;
            }

            init();
        })
})();
