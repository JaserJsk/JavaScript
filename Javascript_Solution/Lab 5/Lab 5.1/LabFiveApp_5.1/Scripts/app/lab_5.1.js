//main module / workspace
var studentApp = angular.module("studentApp", []);

// Controller to bind with UI
studentApp.controller('studentListController',
    function($scope) {
        // student list
        $scope.studentList = [
            {
                'name': 'Jonas Sheik-khalil',
                'status': 'active',
                'education': '.NET Webbutvecklare'
            },
            {
                'name': 'Peter Stormare',
                'status': 'active',
                'education': 'Cloud Computing Engineer'
            },
            {
                'name': 'Karin Holmqvist',
                'status': 'deactive',
                'education': 'Frontend utvecklare'
            },
            {
                'name': 'Marcus Eriksson',
                'status': 'active',
                'education': 'IT-säkerhetstekniker'
            },
            {
                'name': 'Isabella Rönnen',
                'status': 'deactive',
                'education': 'Server- och virtualiseringsspecialist'
            }
        ];
        // course List
        $scope.courseList = [
            '.NET Webbutvecklare',
            'Cloud Computing Engineer',
            'Frontend utvecklare',
            'IT-säkerhetstekniker',
            'Server- och virtualiseringsspecialist'
        ];

        // flag to show students
        $scope.isShowStudent = false;
        // flag to show courses
        $scope.isShowCourses = false;


        $scope.showStudents = function() {
            // assign reverse property to show/hide students list
            $scope.isShowStudent = !$scope.isShowStudent
        }

        $scope.showCourses = function() {
            // assign reverse property to show/hide Course List
            $scope.isShowCourses = !$scope.isShowCourses;
        }
    });