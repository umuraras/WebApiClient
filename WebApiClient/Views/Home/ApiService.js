'use strict';

var app = angular.module("ApiApp", []);

app.controller("ApiController", function ($scope, $http) {
    $http.post .get('data/posts.json').
      success(function (data, status, headers, config) {
          $scope.posts = data;
      }).
      error(function (data, status, headers, config) {
          // log error
      });
});