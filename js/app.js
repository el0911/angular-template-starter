
// 'mgcrea.ngStrap'

var app = angular.module("myApp", ['ngRoute','starter.controllers', 'starter.services',]);
app.config(function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl : "templates/main.html"
    });
});
