let app = angular.module("appModule", []);
app.service("appData", function ($http) {
  this.getFilms = function () {
    return $http.get("https://swapi.dev/api/films");
  };
  this.getCharacters = function () {
    return $http.get("https://swapi.dev/api/people");
  };
  this.getSpecies    = function () {
    return $http.get("https://swapi.dev/api/species");
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
  $scope.characters = [];
  function getAllCharacters() {
    getPromise = appData.getCharacters();
    getPromise.then(function (charactersList) {
      $scope.characters = charactersList.data;
    });
  }
  getAllCharacters();
  $scope.species = [];
  function getAllSpecies() {
    getPromise = appData.getSpecies();
    getPromise.then(function (speciesList) {
      $scope.species = speciesList.data;
    });
  }
  getAllSpecies();
});
