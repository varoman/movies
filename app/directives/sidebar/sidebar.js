(function () {
    'use strcit';
    angular.module('moviesApp').directive('sidebarDirective', function(APIservice){
        'use strict';
        return {
            templateUrl:'app/directives/sidebar/sidebar.html',
            restrict:'E',
            replace: true,
            scope: {},
            link: function (scope) {
                function init() {
                    const upcomingFilmsCount = 5;
                    const genresCount = 13;
                    getGenres(genresCount);
                    getUpcomingFilms(upcomingFilmsCount);
                }

                function getGenres (limitTo) {
                    APIservice.getAllGenres().then((genres) => {
                        scope.genres = genres.data.genres.slice(0, limitTo);
                    });
                }

                function getUpcomingFilms (limitTo) {
                    APIservice.getUpcomings().then((upcomings) => {
                        scope.upcomingFilms = upcomings.data.results.slice(0, limitTo);
                    });
                }

                init();
            }
        };
    });
})();

