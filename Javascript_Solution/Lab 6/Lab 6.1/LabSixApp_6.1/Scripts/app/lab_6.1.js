//main module / workspace
var fruitApp = angular.module("fruitApp", ["ngRoute"]);

// Routing Config
fruitApp.config(function ($routeProvider) {
    $routeProvider
        .when("/", {
            template: "In botany, a fruit is the seed-bearing structure in flowering plants formed from the ovary after flowering. Fruits are the means by which angiosperms disseminate seeds."
        })
        .when("/bananas", {
            template: "The banana is an edible fruit – botanically a berry – produced by several kinds of large herbaceous flowering plants in the genus Musa. In some countries, bananas used for cooking may be called plantains, in contrast to dessert bananas."
        })
        .when("/apples", {
            template: "The apple tree is a deciduous tree in the rose family best known for its sweet, pomaceous fruit, the apple. It is cultivated worldwide as a fruit tree, and is the most widely grown species in the genus Malus."
        })
        .when("/oranges", {
            template: "The orange is the fruit of the citrus species Citrus × sinensis in the family Rutaceae. It is also called sweet orange, to distinguish it from the related Citrus × aurantium, referred to as bitter orange."
        })
        .when("/pears", {
            template: "The pear is any of several tree and shrub species of genus Pyrus, in the family Rosaceae. It is also the name of the pomaceous fruit of the trees."
        })
        .when("/coconut", {
            template: "The coconut tree is a member of the family Arecaceae and the only species of the genus Cocos. The term coconut can refer to the whole coconut palm or the seed, or the fruit, which, botanically, is a drupe, not a nut."
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
