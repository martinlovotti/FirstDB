const { options } = require("./options/sqliteDB.js");
const knex = require("knex")(options);

knex.schema
  .createTable("chat", (table) => {
    //Creamos tabla con sus columnas
    table.increments("id");
    table.string("email");
    table.string("fecha");
    table.string("mensaje");
  })
  .then(() => {
    console.log('Tabla "Chat" creada');
  })
  .catch((err) => {
    console.log(err);
  })
  .finally(() => {
    knex.destroy();
  });
