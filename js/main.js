
var miModulo = angular.module('miAplicacion', []);

miModulo.controller("miControlador",function($scope) {
	$scope.textoDinamico = "hola Mundo";
	console.log($scope);
});

function miIteracion($scope) {
	$scope.animales = [
			{ especie: 'gatos', clase: 'mamíferos' },
			{ especie: 'polilla', clase: 'insectos' },
			{ especie: 'chimpancés', clase: 'mamíferos' },
			{ especie: 'elefantes', clase: 'mamíferos' },
			{ especie: 'dodos', clase: 'aves' },
			{ especie: 'lagartijas', clase: 'reptiles' }
			];
	console.log($scope);
}

var controladorClick = function ($scope) {
	$scope.miFuncion = function () {
		console.log(event);
		alert('Hola Mundo');
	}
	$scope.miFuncion2 = function (parametro) {
		console.log(parametro);
	}
};

