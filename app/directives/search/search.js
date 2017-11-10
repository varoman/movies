(function () {
    'use strcit';
    angular.module('moviesApp').directive('searchDirective', function($state, searchService, $location){
        'use strict';
        return {
            templateUrl:'app/directives/search/search.html',
            restrict:'E',
            replace: true,
            scope: {},
            link: function (scope) {
                scope.searchClicked = false;
                scope.find = function (searchTerms) {
                    scope.searchClicked = true;
                    if (!searchTerms || !searchTerms.film) return;
                    if ($location.path() !== '/search') {
                        searchService.setSearchTerms(searchTerms);
                        $state.go('search');
                        return;
                    }
                   scope.$emit('searchEntered', searchTerms);
                }
            }
        };
    });
})();

