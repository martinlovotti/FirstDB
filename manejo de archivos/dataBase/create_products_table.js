const { options } = require("./options/mariaDB.js");
const knex = require("knex")(options);

knex.schema
  .createTable("productos", (table) => {
    //Creamos tabla con sus columnas
    table.increments("id");
    table.string("title");
    table.integer("price");
    table.string("thumbnail");
  })
  .then(() => {
    console.log('Tabla "Productos" creada');
  })
  .catch((err) => {
    console.log(err);
  })
  .finally(() => {
    knex.destroy();
  });
