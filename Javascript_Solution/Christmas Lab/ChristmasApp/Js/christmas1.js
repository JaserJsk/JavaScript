var App = angular.module('App', []);

App.factory('filmFactory', function () {
    var Film =[
        { title: 'The Seven Samurai', date: 1954 },
        { title: 'Bonnie and Clyde', date: 1967 },
        { title: 'Airplane', date: 1980 },
        { title: 'Rocky', date: 1976 },
        { title: 'Braveheart', date: 1995 },
        { title: 'Seven', date: 1995 },
        { title: 'Inception', date: 2010 },
        { title: 'Die Hard', date: 1988 },
        { title: 'Wall-E', date: 2008 },
        { title: 'Ghostbusters', date: 1984 }];

    var factory = {};
    factory.getFilm = function () {
        return Film;
    }

    return factory;
});

var controllers = {};
App.controller('filmsController', function ($scope, filmFactory) {
    $scope.Film = filmFactory.getFilm();
});

App.factory('userFactory', function () {
    var Users = [
        { users: 'Ari', usersName: 'Aries', password: 'Silvestro' },
        { users: 'Cor', usersName: 'Cory', password: 'Ray' },
        { users: 'Tys', usersName: 'Tyson', password: 'Karena' },
        { users: 'Sab', usersName: 'Sabryna', password: 'Redd' },
        { users: 'Ben', usersName: 'Benny', password: 'Ottokar' }];

    var factory = {};

    factory.getUsers = function () {
        return Users;
    }

    return factory;
});

App.controller('usersController', function ($scope, userFactory) {
    $scope.Users = userFactory.getUsers();
});