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
		templateUrl : "templates/liga/main.html",
		controller : "playersController"
	})
	.when("/flori", {
		templateUrl : "templates/flori.html",
		controller : "controllerGrecia"
	})
	.when("/manuel", {
		templateUrl : "templates/manuel.html",
		controller : "controllerEscandinavia"
	})
	.when("/oli", {
		templateUrl : "templates/oli.html",
		controller : "controllerMesoamerica"
	})
	.otherwise({ reditrectTo : "/" });
});