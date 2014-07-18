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

moduloLiga.controller("playerAcciones", function($scope, factoryPlayer) {

    factoryPlayer.getMainInfo().success(function (response) {
        //Dig into the responde to get the relevant data
        console.log(response);
        $scope.playersList = response;
    });

    $scope.estadoPlayer = false;

    $scope.addPlayer = function() {
       if ( $scope.estadoPlayer === true ) {
            $scope.estadoPlayer = false;
       } else {
            $scope.estadoPlayer = true;
       }       
    }

    $scope.getShowPlayer= function() {       
       return $scope.estadoPlayer;
    }

    $scope.submitAddPlayer = function() {
        
        var nuevoPlayer = {};
        nuevoPlayer =  { name: $scope.formPlayer.inputName, 
                       points:0, 
                       nationality:$scope.formPlayer.inputNationality,
                       partidosJ:0,
                       team:$scope.formPlayer.inputTeam
                    }; 
        // "name":"Oli","points":"0","nationality":"Córdoba","partidosJ":"0","team":"PSG"
        
        /* Añadimos la nota en el jasonajo, lo cual se refleja enseguida en la vista...*/   
        $scope.playersList.push(nuevoPlayer);

        /* Cambiamos la visibilidad del modal */
        $scope.estadoPlayer = false;        

        /* y reseteamos el formulario */
        $scope.formPlayer = {};
    }
});