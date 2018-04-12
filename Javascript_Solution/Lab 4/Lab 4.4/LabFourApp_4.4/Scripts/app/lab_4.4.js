//main module / workspace
var studentApp = angular.module("studentApp", []);

// Controller to bind with UI
studentApp.controller('studentListController',
    function($scope) {
        // Student List to bind with scope and to be visible on UI
        $scope.studentList = [
            {
                'name': 'Jonas Sheik-khalil',
                'city': 'Malmoe',
                'telephone': 07388521785
            },
            {
                'name': 'Peter Stormare',
                'city': 'Stockholm',
                'telephone': 0769852171
            },
            {
                'name': 'Karin Holmqvist',
                'city': 'Uppsala',
                'telephone': 0736521079
            },
            {
                'name': 'Marcus Eriksson',
                'city': 'Göteborg',
                'telephone': 0735218963
            },
            {
                'name': 'Isabella Rönnen',
                'city': 'Helsingborg',
                'telephone': 0768821203
            }
        ];
    });
