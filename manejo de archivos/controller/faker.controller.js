const productosFaker = require("../utils/productosFaker");

//controller - Utiliza las funciones declaradas en productosFaker.js
class Contenedor {
  static getAll() {
    return productosFaker.list();
  }
}

module.exports = Contenedor;
