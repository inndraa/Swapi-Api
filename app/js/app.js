let app = angular.module("appModule", []);
app.service("appData", function ($http) {
  this.getFilms = function () {
    return $http.get("https://swapi.dev/api/films");
  };
});
app.controller("appController", function ($scope, appData) {
  $scope.films = [];
  function getAllFilms() {
    getPromise = appData.getFilms();
    getPromise.then(function (filmsList) {
      $scope.films = filmsList.data;
    });
  }
  getAllFilms();
});
    