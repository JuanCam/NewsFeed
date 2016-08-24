'use strict';

/**
 * @ngdoc service
 * @name newsFeedApp.news
 * @description
 * # news
 * Service in the newsFeedApp.
 */
angular.module('newsFeedApp')
    .service('news', function($http) {
        this.get = function() {
            return $http.get('data/news_mock (5).json');
        };
    });