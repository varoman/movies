(function () {
    'use strict';
    angular.module('moviesApp')
        .service('APIservice', ['$http', function ($http) {

            const factory = {};

            factory.getUpcoming = function () {
               return $http.get('https://api.themoviedb.org/3/movie/upcoming?api_key=e51d01a3f8fa370a06cd182e41adce34');
            }

        }])
})();