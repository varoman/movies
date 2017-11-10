(function () {
    'use strict';
    angular.module('moviesApp')
        .service('detailsService', function (APIservice) {

            const factory = {};
            factory.latestCount = {};

            function getMoviesDetailed (moviesCollection) {
                let promises = [];
                moviesCollection.map((movie) => {
                    promises.push(new Promise((resolve) => {
                        resolve(APIservice.getSingleMovie(movie.id));
                    }));
                });
                return promises;
            }

            factory.addDetails = function (collection, scope) {
                Promise.all(getMoviesDetailed(collection)).then((detailedMovies) => {
                    scope.$apply(() => {
                        for (let i = 0; i < collection.length; i++) {
                            collection[i].genres = detailedMovies[i].data.genres;
                            collection[i].productionCompanies = detailedMovies[i].data.production_companies;
                        }
                    });
                })
            };

            factory.removeFilm = function (movies, index) {
                movies.splice(index, 1);
            };

            factory.getlatestCount = function () {
                APIservice.getLatestFilms().then((res) => {
                    factory.latestCount = res.data.total_results;
                })
            };

            factory.getlatestCount();

            return factory;

        });
})();