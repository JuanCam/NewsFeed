'use strict';

/**
 * @ngdoc directive
 * @name newsFeedApp.directive:feed
 * @description
 * # feed
 */
angular.module('newsFeedApp')
    .directive('feed', function() {
        return {
            templateUrl: 'views/feed.html',
            restrict: 'EA',
            scope: {
                'titleclass': '=',
                'allnews': '=',
                'classnews': '=',
                'currentnews': '=',
                'hideallnews': '&'
            },
            link: ($scope, $element, attrs) => {
                /*This is the link method that of this ddo*/
                $scope.showNew = function(event, id) {

                    /*Shows a new item every time the image is cliked*/
                    $scope.titleclass = 'bounceInDown';
                    var newsObj = this.news;
                    var newsEl = $($element).find('.news-datail[data-id=' + id + ']')[0];
                    if (!/active/g.test(newsEl.className)) {
                        $scope.hideallnews();
                        $scope.titleclass = 'bounceInDown';
                        newsEl.classList.toggle('bounceInDown');
                    } else {
                        $scope.titleclass = 'bounceOutLeft';
                    }
                    $scope.currentnews.title = newsObj.title;
                    newsEl.classList.toggle('active');
                };
            }
        };
    });