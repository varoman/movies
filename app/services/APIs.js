(function () {
    'use strict';
    angular.module('moviesApp')
        .service('APIservice', function ($http) {

            const factory = {};

            factory.getUpcomings = function () {
               return $http.get('https://api.themoviedb.org/3/movie/upcoming?api_key=e51d01a3f8fa370a06cd182e41adce34');
            };

            factory.getAllGenres = function () {
            	return $http.get('https://api.themoviedb.org/3/genre/movie/list?api_key=e51d01a3f8fa370a06cd182e41adce34');
            };

            factory.getAllMovies = function (page) {
            	return $http.get('https://api.themoviedb.org/3/movie/popular?api_key=e51d01a3f8fa370a06cd182e41adce34&language=en-US&page=' + page);
            };

            factory.getSingleMovie = function (movieId) {
              return $http.get('https://api.themoviedb.org/3/movie/' + movieId + '?api_key=e51d01a3f8fa370a06cd182e41adce34&language=en-US')
            };

            factory.getLatestFilms = function () {
              return $http.get('https://api.themoviedb.org/3/movie/now_playing?api_key=e51d01a3f8fa370a06cd182e41adce34&language=en-US&page=1');
            };

            return factory;

        })
})();