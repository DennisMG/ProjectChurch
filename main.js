
var app = angular.module("myApp", ["ngRoute"]);

      app.config(function($routeProvider) {
          $routeProvider
          .when("/", {
              templateUrl : "pages/home.html",
              controller  : 'mainController'
          })
          .when("/misionvision", {
              templateUrl : "pages/misionyvision.html",
              controller  : 'misionVisionController'
          })
          .when("/gallery", {
              templateUrl : "pages/gallery.html",
              controller  : 'galleryController'
          })
          .when("/contactus", {
              templateUrl : "pages/contactus.html",
              controller  : 'contactUsController'
          }).otherwise({
            redirectTo: '/'
          });
      });


app.controller('mainController', function($scope) {
  $scope.message = 'Hola, Main!';
});


app.controller('misionVisionController', function($scope) {
  $scope.message = 'Hola, Main!';
});

app.controller('contactUsController', function($scope) {
    $scope.message = 'Esta es la página "Acerca de"';
});

app.controller('galleryController', function($scope) {
    $scope.message = 'Esta es la página de "Galleria", aquí podemos poner un formulario';
});