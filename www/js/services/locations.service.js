angular.module('miapp')
.service('Locations', function Locations ($http) {
  this.data = []
  this.resource = 'http://localhost:3001/locations'
  this.currentLocation = []
  this.selected = undefined

  //Método para listar Ubicaciones.
  this.listar = function listar () {
    var servicio = this
    $http
    .get(this.resource)
    .success(function success (data) {
      servicio.data = data
      //Línea 15 y 16 setean lat y long por defecto equivalente al primer objeto consumido desde el endpoint.
      servicio.currentLocation.push(data[0].coords[0].latitude)
      servicio.currentLocation.push(data[0].coords[0].longitude)
      //Línea 19 selecciona por defecto el primer elemento para aplicar cambio de color de fondo en la vista.
      servicio.selected = data[0]._id
    })
  }

  //Método para mover el mapa al hacer click en la ubicación.
  this.moverMapa = function moverMapa(ubicacion) {
    this.currentLocation[0] = ubicacion.coords[0].latitude
    this.currentLocation[1] = ubicacion.coords[0].longitude
    this.selected = ubicacion._id
  }
  
  //Método para inicializar la lista de ubicaciones.
  this.listar();

});