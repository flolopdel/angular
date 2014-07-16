// DIOSES

moduloMitologia.controller("controllerMain", function ($scope){
	$scope.saludoInicial = 'Selecciona una mitología';
});
moduloMitologia.controller("controllerGrecia", function ($scope){
	$scope.dioses = [ {nombre: 'Zeus'}, {nombre: 'Afrodita'}, {nombre: 'Atenea'} ];
});
moduloMitologia.controller("controllerEscandinavia", function ($scope){
	$scope.dioses = [ {nombre: 'Odin'}, {nombre: 'Thor'}, {nombre: 'Loki'} ];
});
moduloMitologia.controller("controllerMesoamerica", function ($scope){
	$scope.dioses = [ {nombre: 'Quetzalcoatl'}, {nombre: 'Tezcatlipoca'}, {nombre: 'Tlaloc'} ];
});

//LIGA
moduloLiga.controller('playersController', function($scope) {
    $scope.playersList = [
      {
          name: 'Flori',
          points: 0,
          nationality: "Sevilla",
          Teams: [
              {name: "FC Bayer", activo: 1}
          ]
      },
      {
          name: 'Manuel',
          points: 0,
          nationality: "Córdoba",
          Teams: [
              {name: "Juventus", activo: 1},
              {name: "Barcelona", activo: 0}
          ]
      },
      {
          name: 'Oli',
          points: 0,
          nationality: "Córdoba",
          Teams: [
              {name: "PSV", activo: 1}
          ]
      }
    ];
});