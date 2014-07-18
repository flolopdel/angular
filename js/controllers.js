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
moduloLiga.controller('playersController', function($scope, factoryPlayer) {
    factoryPlayer.getMainInfo().success(function (response) {
        //Dig into the responde to get the relevant data
        console.log(response);
        $scope.playersList = response;
    });
});
moduloLiga.controller('SendPoint', ['$scope', function($scope) {
      $scope.list = [];
      $scope.text = 'hello';
      $scope.submit = function() {
        if ($scope.text) {
          alert(this.text);
          $scope.list.push(this.text);
          $scope.text = '';
        }
      };
    }]);