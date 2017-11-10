(function () {
    'use strict';
    angular.module('moviesApp')
        .controller('genresController', function ($scope, $stateParams, APIservice, FilmsPerPage, detailsService, $location) {

            function init() {
                getListByGenre($stateParams.genreId);
            }

            function getListByGenre(id) {
                APIservice.getFilmsByGenre(id).then((collection) => {
                    $scope.movies = collection.data.results.slice(0, FilmsPerPage);
                    detailsService.addDetails($scope.movies, $scope);
                }, (error) => {
                    getTypedGenre()
                });
            }

            function getTypedGenre() {
                const genre = $location.path().split('/')[2];
                let genres = [];
                let typedGenre;
                APIservice.getAllGenres().then((res) => {
                    genres = res.data.genres;
                    typedGenre = genres.find((item) => {
                        return item.name === genre;
                    });
                    getListByGenre(typedGenre.id);
                });
            }

            init()

        })
})();
