//main module / workspace
var studentApp = angular.module("studentApp", []);

// Controller to bind with UI
studentApp.controller('studentListController', function ($scope, dataService) {
    // student list
    $scope.studentList = [];
    // course List
    $scope.courseList = [];
    // Add student
    $scope.addStudent;
    // To hold new student data
    $scope.newStudent = {}
    // To check error type
    $scope.errorType;

    $scope.addStudent = function () {
        // Add student
        $scope.addStudent = true;
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
        // To prevent two way data binding, use copy function
        var data = angular.copy($scope.newStudent);
        dataService.setStudentList(data)
        // if success
        $scope.errorType = 'success';
        $scope.errorToAddIntoDatabase = "Added Successfully";

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
        // if success then resolve
        if (student !== undefined) {
            studentList.push(student);
        }

    }

    return dataService;
});
