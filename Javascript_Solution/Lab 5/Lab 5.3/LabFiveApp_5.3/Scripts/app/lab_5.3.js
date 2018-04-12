//main module / workspace
var studentApp = angular.module("studentApp", []);

// Controller to bind with UI
studentApp.controller('studentListController', function ($scope, dataService) {
    //Filter
    $scope.search;
    // student list
    $scope.studentList = [];
    // course List
    $scope.courseList = [];
    // Add student
    $scope.addStudent;
    // To hold new student data
    $scope.newStudent = {}
    // To check error type
    $scope.errorType = '';
    $scope.errorToAddIntoDatabase = '';

    $scope.addStudent = function () {
        // Add student
        $scope.addStudent = true;
    }

    $scope.filterChanged = function () {
        // Add latest search to localStorage
        localStorage.setItem('search', $scope.search);
    }

    $scope.loadLastSearch = function () {
        // Add latest search to localStorage
        $scope.search = localStorage.getItem('search');
    }

    // To store into service object
    $scope.addStudentToDatabase = function () {
        // to decide if is alredy added
        var isAdded = false;
        // get students
        var students = dataService.getStudentList();
        for (let student of students) {
            // if exist
            if (student.name === $scope.newStudent.name) {
                isAdded = true;
            }
        }
        // If not exist
        if (!isAdded) {
            // To prevent two way data binding, use copy function
            var data = angular.copy($scope.newStudent);
            dataService.setStudentList(data).then(function (data) {
                console.log(data);
                // if success
                $scope.errorType = 'success';
                $scope.errorToAddIntoDatabase = "Added Successfully";
            })
        } else {
            // if failed to add
            $scope.errorType = 'fail';
            $scope.errorToAddIntoDatabase = "Alreay Exist";
        }
    }

    $scope.showStudents = function () {
        // Student list in array
        $scope.studentList = dataService.getStudentList();
    }

    $scope.showCourses = function () {
        // Course List
        $scope.courseList = dataService.getCourseList();
    }
})

// factory Service to get and set data
studentApp.factory('dataService', function () {

    var dataService = {};

    // Student List to hold data
    var studentList = [
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

    // Course List to hold courses info
    var courseList = [
        '.NET Webbutvecklare',
        'Cloud Computing Engineer',
        'Frontend utvecklare',
        'IT-säkerhetstekniker',
        'Server- och virtualiseringsspecialist'
    ];

    // to get student list
    dataService.getStudentList = function () {
        return studentList;
    }

    // to get course list
    dataService.getCourseList = function () {
        return courseList;
    }

    // to set student list
    dataService.setStudentList = function (student) {
        // return as promise
        return new Promise(
            function (resolve, reject) {
                // if success then resolve
                if (student !== undefined) {
                    studentList.push(student);
                    resolve(student); // fulfilled
                } else {
                    // if failure then reject
                    var reason = new Error('Error to add record');
                    reject(reason); // reject
                }

            }
        );
    }

    return dataService;
});
