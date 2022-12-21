// inicializandolo
let app = angular.module("MyApp", []);
app.controller("formCtrl", function($scope){
    $scope.code = $scope.code;
    $scope.nombre = $scope.nombre;
    $scope.horasT = $scope.horasT;
    $scope.tariH = $scope.tariH;

    $scope.totalidad = function(horas, tarifa){
        $scope.sueldo = horas*tarifa;
        $scope.sueldoNeto = $scope.sueldo;
        $scope.descuento = 0;
        $scope.total=0;

        if(horas<500){
            $scope.total = $scope.sueldo;
        }else if(horas>501&&horas<1000){
            $scope.sueldo = $scope.sueldoNeto*0.02;
            $scope.total = (horas*tarifa) - $scope.sueldo;
        }else if(horas>1001 && 4000){
            $scope.sueldo = $scope.sueldoNeto*0.08;
            $scope.total = (horas*tarifa) - $scope.sueldo;
        }else if(horas>4001 && horas<8000){
            $scope.sueldo = $scope.sueldoNeto*0.15;
            $scope.total = (horas*tarifa) - $scope.sueldo;
        }else if(horas>8001 && horas<10000){
            $scope.sueldo = $scope.sueldoNeto*0.21;
            $scope.total = (horas*tarifa) - $scope.sueldo;
        }else{
            $scope.sueldo = $scope.sueldoNeto*0.30;
            $scope.total = (horas*tarifa) - $scope.sueldo;
        }

        return $scope.total;
    }
})