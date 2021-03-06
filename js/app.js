//DIOSES
var moduloMitologia = angular.module('appMitologia', ['ngRoute']);
moduloMitologia.config(function($routeProvider) {
	$routeProvider
	.when("/", {
		templateUrl : "templates/dioses/main.html",
		controller : "controllerMain"
	})
	.when("/grecia", {
		templateUrl : "templates/dioses/grecia.html",
		controller : "controllerGrecia"
	})
	.when("/escandinavia", {
		templateUrl : "templates/dioses/escandinavia.html",
		controller : "controllerEscandinavia"
	})
	.when("/mesoamerica", {
		templateUrl : "templates/dioses/mesoamerica.html",
		controller : "controllerMesoamerica"
	})
	.otherwise({ reditrectTo : "/" });
});
//LIGA
var moduloLiga = angular.module('appLiga', ['ngRoute']);
moduloLiga.config(function($routeProvider) {
	$routeProvider
	.when("/", {
		templateUrl : "templates/liga/main.html"
	})
	.otherwise({ reditrectTo : "/" });
});
moduloLiga.factory('factoryPlayer', function($http) {

	var mainInfo = $http.get('http://localhost/angular-filesi/js/jsonp.json').success(function(response) {
		console.log(response);
        return response;
    });
    var factory = {}; // define factory object

    factory.getMainInfo = function() { // define method on factory object

        return mainInfo; // returning data that was pulled in $http call

    };

    return factory;

  });