var app = angular.module('myApp', ["ngRoute"]);
app.config(function($routeProvider) {
    $routeProvider
    .when("/:username", {
        templateUrl :"ext.html"
    });
});
app.controller('myCtrl', function($scope, $http) {
  $http({
    method : "GET",
    url : "https://api.github.com/users?since=0"
  }).then(function mySucces(response) {
      $scope.myData = response.data;
    }, function myError(response) {
      $scope.myData = response.statusText;
  });
});

    
