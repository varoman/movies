(function () {
    'use strcit';
    angular.module('moviesApp').directive('paginationDirective', function(detailsService, ){
        'use strict';
        return {
            templateUrl:'app/directives/pagination/pagination.html',
            restrict:'E',
            replace: true,
            scope: {
                isolatedMovies: '=bindingMovies'
            },
            link: function (scope) {
                function init() {
                    
                }
                scope.$on('gotMovies', (event, values) => { 
                    scope.pageCount = [];
                    scope.pageCount = new Array(values.pageCount);
                    scope.getter = values.getter;
                    scope.currentPage = 1;
                });

                scope.changePage = function (page) {
                    scope.getter(page).then((res) => {
                        scope.isolatedMovies = res.data.results.slice(0, 5);
                        detailsService.addDetails(scope.isolatedMovies, scope.$parent);
                        scope.currentPage = page;
                    });
                }
            }
        };
    });
})();

