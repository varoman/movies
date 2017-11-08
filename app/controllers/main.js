(function () {
    'use strict';
    angular.module('moviesApp')
        .controller('mainController',function (APIservice, $scope) {
            function init() {
                $scope.upcomingCount = 5;
            }

            APIservice.getUpcomings().then((upcomings) => {
               $scope.upcomingFilms = upcomings.data.results.slice(0, $scope.upcomingCount);
               console.log($scope.upcomingFilms )
            });

            init();
        })
})();
