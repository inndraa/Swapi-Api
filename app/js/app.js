let app = angular.module("appModule", ['ngRoute']);
app.service("appData", function ($http) {
  this.getFilms = function () {
    return $http.get("https://swapi.dev/api/films");
  };
  this.getCharacters = function () {
    return $http.get("https://swapi.dev/api/people");
  };
  this.getSpecies = function () {
    return $http.get("https://swapi.dev/api/species");
  };
  this.getPlanets = function () {
    return $http.get("https://swapi.dev/api/planets");
  };
  this.getVehicles = function () {
    return $http.get("https://swapi.dev/api/vehicles");
  };
  this.getStarships = function () {
    return $http.get("https://swapi.dev/api/starships");
  };
});

app.controller("appController", function ($scope, appData) {
  $scope.films = [];
  // ---------------------------------
  function getAllFilms() {
    getPromise = appData.getFilms();
    getPromise.then(function (filmsList) {
      $scope.films = filmsList.data;
    });
  }
  getAllFilms();
  // ---------------------------------
  $scope.characters = [];
  function getAllCharacters() {
    getPromise = appData.getCharacters();
    getPromise.then(function (charactersList) {
      $scope.characters = charactersList.data;
    });
  }
  getAllCharacters();
  // ---------------------------------
  $scope.species = [];
  function getAllSpecies() {
    getPromise = appData.getSpecies();
    getPromise.then(function (speciesList) {
      $scope.species = speciesList.data;
    });
  }
  getAllSpecies();
  // ---------------------------------
  $scope.planets = [];
  function getAllPlanets() {
    getPromise = appData.getPlanets();
    getPromise.then(function (planetsList) {
      $scope.planets = planetsList.data;
    });
  }
  getAllPlanets();
  // ---------------------------------
  $scope.vehicles = [];
  function getAllVehicles() {
    getPromise = appData.getVehicles();
    getPromise.then(function (vehiclesList) {
      $scope.vehicles = vehiclesList.data;
    });
  }
  getAllVehicles();
  // ---------------------------------
  $scope.starships = [];
  function getAllStarships() {
    getPromise = appData.getStarships();
    getPromise.then(function (starshipsList) {
      $scope.starships = starshipsList.data;
    });
  }
  getAllStarships();

});

app.config(['$routeProvider', function ($routeProvider) {
  $routeProvider.when('/', {
    templateUrl: '/app/pages/home.html'
  })
    .when('/films', {
      templateUrl: "/app/pages/films.html"

    })
    .when('/people', {
      templateUrl: '/app/pages/people.html'

    })
    .when('/planets', {
      templateUrl: '/app/pages/planets.html'

    })
    .when('/species', {
      templateUrl: '/app/pages/species.html'

    })
    .when('/starships', {
      templateUrl: '/app/pages/starships.html'

    })
    .when('/vehicles', {
      templateUrl: '/app/pages/vehicles.html'
    })
    .otherwise({
      redirectTo: '/'
    })
}])
// app.controller('filmsCtrl', function($scope){
//   $scope.comments = [];
// })