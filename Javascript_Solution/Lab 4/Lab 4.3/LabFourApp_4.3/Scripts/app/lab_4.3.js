//main module / workspace
var carApp = angular.module("carApp", []);

// Controller to bind with UI
carApp.controller('carListController', function ($scope) {
    // Car List to bind with scope and to be visible on UI
    $scope.carsList = [
        'Volvo XC90 - Model 2016',
        'Renault KWID - Model 2016',
        'BMW - Model 2016',
        'TOYOTA XUV - Model 2017',
        'Bolero - Model 2017',
        'Hyundai GC90 - Model 2017',
        'Scorio ZC99 - Model 2017'
    ]
})