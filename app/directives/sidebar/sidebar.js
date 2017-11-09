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
                    const genresCount = 13;
                    getGenres(genresCount);
                }

                function getGenres (limitTo) {
                    APIservice.getAllGenres().then((genres) => {
                        scope.genres = genres.data.genres.slice(0, limitTo);
                        console.log(scope.genres)
                    })
                }

                init();
            }
        };
    });
})();

