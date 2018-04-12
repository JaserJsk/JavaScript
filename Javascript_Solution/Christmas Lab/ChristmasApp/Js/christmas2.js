var EmApp = EmApp || {};
EmApp.users = [
    { users: 'Ari', usersName: 'Aries', password: 'Silvestro' },
    { users: 'Cor', usersName: 'Cory', password: 'Ray' },
    { users: 'Tys', usersName: 'Tyson', password: 'Karena' },
    { users: 'Sab', usersName: 'Sabryna', password: 'Redd' },
    { users: 'Ben', usersName: 'Benny', password: 'Ottokar' }];

var App = angular.module('App', []);
App.factory('userFactory', function () {

    var factory = {};
    factory.getUsers = function () {
        return EmApp.users;
    };

    factory.setUserData = function (user) {
        EmApp.users.push(user);
    };

    return factory;
});

App.controller('userCtrl', function ($scope, userFactory, $q)
{
    //debugger;

    $scope.users = userFactory.getUsers();
    $scope.Remember = false;
    $scope.test2 = function () {
        var c = {};
        angular.forEach(EmApp.users, function (value, key) {
            if (value.usersName == $scope.newUser && value.password == $scope.newPass) {
                c = value;
            }
        });

        var deferred = $q.defer();
        var promise = deferred.promise;

        promise.then(function (c) {

                $scope.status2 = 'Success pass 1 - ' + c;
                //userFactory.setUserData({ user: $scope.newU, usersName: $scope.newUser, password: $scope.newPass });
                return c;
            }, function (reason) {
                $scope.status2 = 'failure pass 1';
                return reason;
            })
            .then(function (c)
            {
                //debugger;

                alert('Success: ' + c);
                sessionStorage.removeItem('user');
                sessionStorage.user = c.usersName;
                window.location.href = 'Index1.html';
            },
            function (reason)
            {
                alert('Error: ' + reason);
            });

        if (angular.equals(c, {})) {
            deferred.reject('User & Password did not match. Please try again!');
        }
        else
        {
            deferred.resolve('Logged in”');
        }    
    };

    if ($scope.Remember == true)
    {
        debugger;

    }

});