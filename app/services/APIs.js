(function () {
    'use strict';
    angular.module('moviesApp')
        .service('APIservice', function ($http) {

            const factory = {};
            let genresData, upcomingsData;

            /*** here, I've implemented two types of service functions:
             ***1) when function allways returning $http.get() method, which means that service function which  will be called from controller,
             **   will allways return a new server call. That can be necessary in particular cases (when you know the data can be changed on every call)
             ***2) functions with promises; they will make a call to the server, get data and preserve it. Next time you call this function it will not
             **   make a new call, instead it will serve a new Promise(controller doesn't knwo if he gets a promise or just a data), preventing a new server
             **   call, which will save bandwith and boost the performance;
            ***/

            factory.getUpcomings = function () {
                if(upcomingsData) {
                    return new Promise((resolve) => {
                        resolve(upcomingsData);
                    })
                }
                return new Promise((resolve) => {
                    $http.get('https://api.themoviedb.org/3/movie/upcoming?api_key=e51d01a3f8fa370a06cd182e41adce34').then((res) => {
                        upcomingsData = res;
                        resolve(upcomingsData)
                    });
                });
            };

            factory.getAllGenres = function () {
                if(genresData) {
                    return new Promise((resolve) => {
                        resolve(genresData);
                    })
                }
                return new Promise((resolve) => {
                    $http.get('https://api.themoviedb.org/3/genre/movie/list?api_key=e51d01a3f8fa370a06cd182e41adce34').then((res) => {
                        genresData = res;
                        resolve(genresData)
                    });
                })
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

            factory.getTopRatedFilms = function (page) {
                return $http.get('https://api.themoviedb.org/3/movie/top_rated?api_key=e51d01a3f8fa370a06cd182e41adce34&language=en-US&page=' + page);
            };

            factory.getFilmsByGenre = function (id) {
              return $http.get('https://api.themoviedb.org/3/genre/' + id + '/movies?api_key=e51d01a3f8fa370a06cd182e41adce34&language=en-US&include_adult=false&sort_by=created_at.asc');
            };

            factory.searchByTerms = function (terms) {
                return $http.get('https://api.themoviedb.org/3/search/movie?api_key=e51d01a3f8fa370a06cd182e41adce34&language=en-US' +
                    filterQuery(terms.film) + filterRegion(terms.country) + filterDate(terms.date));
            };

            function filterQuery(query) {
                return '&query=' + encode(query);
            }

            function filterRegion(region) {
                if (!region) return '';
                return '&region=' + region;
            }

            function filterDate(date) {
                if (!date) return '';
                return '&year=' + date;
            }

            function encode(data) {
                if (!data) return;
                if (data.indexOf(' ') > -1) {
                    return data.replace(' ', '%20');
                }
                return data;
            }

            return factory;

        });
})();