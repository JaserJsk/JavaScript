//main module / workspace
var registrationApp = angular.module("registrationApp", ["ngRoute"]);

// Routing Config
registrationApp.config(function ($routeProvider) {
    $routeProvider
        .when("/", {
            templateUrl: "./partials/home.html"
        })
        .when("/registrationForSeminar", {
            templateUrl: "./partials/registrationForSeminar.html"
        })
        .when("/registrationForUser", {
            templateUrl: "./partials/registrationForUser.html"
        })
        .when("/registrationConfirmation", {
            templateUrl: "./partials/registrationConfirmation.html"
        });
});

// Controller to bind with Seminar details
registrationApp.controller('seminarController',
    function($scope, dataService) {
        // bind seminar details to scope
        $scope.seminar = {};
        // to set seminar details
        $scope.setSeminar = function() {
            dataService.setSeminarDetails($scope.seminar);
        }
    });

// Controller to bind with user details
registrationApp.controller('userController',
    function($scope, dataService) {
        // bind user details to scope
        $scope.user = {};
        // to reset form to register another user
        $scope.reset = function() {
            // Copy data to prevent two way binding
            var user = angular.copy($scope.user)
            dataService.setUser(user);
            $scope.user = {};
        }

        // to reset form to register another user
        $scope.registerUser = function() {
            // Copy data to prevent two way binding
            var user = angular.copy($scope.user)
            dataService.setUser(user);
        }
    });

// Controller to bind with user details
registrationApp.controller('registrationConfirmationController',
    function($scope, dataService) {
        // get seminar details
        var seminarData = dataService.getSeminarDetails();
        // bind seminar data to scope to available on UI
        $scope.seminarData = seminarData[0];
        // get registered users
        var users = dataService.getUsers();
        // to prevent two way binding
        $scope.users = angular.copy(users);
    });

// factory Service to get and set data
registrationApp.factory('dataService', function () {
    var seminarDetails = [];
    var users = [];

    var dataService = {};

    dataService.getSeminarDetails = function () {
        // get all seminar details
        return seminarDetails;
    }

    dataService.setSeminarDetails = function (data) {
        // collect seminar deetails
        seminarDetails.push(data);
    }

    dataService.getUsers = function () {
        // get all users
        return users;
    }

    dataService.setUser = function (data) {
        // collect user deetails
        users.push(data);
    }

    return dataService;
});
