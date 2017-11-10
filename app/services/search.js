(function () {
    'use strict';
    angular.module('moviesApp')
        .service('searchService', function () {

            const factory = {};

            factory.searchTerms = {};

            factory.setSearchTerms = function (terms) {
                factory.searchTerms = terms;
            };

            return factory;

        });
})();