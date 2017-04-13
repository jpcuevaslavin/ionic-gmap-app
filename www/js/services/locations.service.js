angular.module('miapp')
.service('Locations', function Locations ($http) {
  this.data = []
  this.resource = 'http://localhost:3001/locations/'

  //Método para listar Ubicaciones.
  this.listar = function listar () {
    var servicio = this
    $http
    .get(this.resource)
    .success(function success (data) {
      // console.log(data);
      servicio.data = data
    })
  }
    
  this.listar();

});