'use strict';

/**
 * @ngdoc function
 * @name newsFeedApp.controller:HomeCtrl
 * @description
 * # HomeCtrl
 * Controller of the newsFeedApp
 */
angular.module('newsFeedApp')
    .controller('HomeCtrl', function ($scope, $timeout, news) {
        /*This is the home controller functionality*/
        $scope.classNews = '';
        $scope.titleClass = '';
        $scope.visibleFeed = false;
        $scope.bootstrapIcon = '';
        $scope.currentNews = {
            "title": "",
        };

        news.get().then((data) => {
            /*Get the news provided by the service*/
            $scope.AllNews = data.data;
            setNews.call($scope, $scope.AllNews);
        });

        $scope.toggleFeed = function() {
            /*Show/hidde the news feed every time is clicked*/
            var newsEls = this.getNewsElems();

            this.visibleFeed = !this.visibleFeed;
            this.titleClass = (!this.visibleFeed) ? 'bounceOutLeft' : '';
            this.currentNews.title = (this.visibleFeed) ? '' : this.currentNews.title;
            this.classNews = !this.classNews;
            this.bootstrapIcon = !this.bootstrapIcon;
            this.hideAllNews();
            toggleNewsItem(newsEls);

        };
        $scope.hideAllNews = function() {
            /*Hide all news details using jQuery*/
            var scope = this;
            $(document).find('.news-datail').removeClass('active');
        };
        $scope.getNewsElems = function() {
            /*Return all news DOM elements using jQuery*/
            return $(document).find('.news-box');
        };

        function toggleNewsItem(newsEls) {
            /*Show/hide all elements corresponding to the news items
            this method creates the effect that shows the items one
            by one*/
            for (var n = 0, delay = 0; n < newsEls.length; n++) {
                $timeout(((newsEL) => {
                    return () => {
                        toggleClassItem(newsEL);
                    };
                })(newsEls[n]), delay);
                delay += 200;
            }

            function toggleClassItem(item) {
                item.classList.toggle('active');
                item.classList.toggle('bounceInLeft');
            }
        }

        function setNews(news) {
            /*Set the News model*/
            this.News = news;
        }
    });