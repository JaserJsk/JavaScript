//main module / workspace
var fruitApp = angular.module("fruitApp", ["ngRoute"]);

// Routing Config
fruitApp.config(function ($routeProvider) {
    $routeProvider
        .when("/", {
            templateUrl: "./partials/fruits.html"
        })
        .when("/bananas", {
            templateUrl: "./partials/bananas.html"
        })
        .when("/apples", {
            templateUrl: "./partials/apples.html"
        })
        .when("/oranges", {
            templateUrl: "./partials/oranges.html"
        })
        .when("/pears", {
            templateUrl: "./partials/pears.html"
        })
        .when("/coconut", {
            templateUrl: "./partials/coconut.html"
        });
});

// Controller to bind with UI
fruitApp.controller('fruitListController',
    function($scope, dataService) {

    });

// factory Service to get and set data
fruitApp.factory('dataService', function () {

    var dataService = {};

    return dataService;
});
