const express = require("express");
const app = express();

const { options } = require("./options/sqliteDB");
const knex = require("knex")(options);

app.get("/productos", (req, res) => {
    knex
      .from("productos")
      .select("*")
      .then((rows) => {
        res.json(rows);
      })
      .catch((err) => {
        console.log(err);
        res.status(500).end();
      });
});

  app.get("/productos/:id", (req, res) => {
    const { id } = req.params;
    knex
      .from("productos")
      .select("*")
      .where({ id })
      .then((row) => {
        res.json(row);
      })
      .catch((err) => {
        console.log(err);
        res.status(500).end();
      });
  });

app.delete("/products/:id", (req, res) => {
    const { id } = req.params;
    knex
      .from("productos")
      .where({id})
      .del()
      .then(() => {
        res.status(200).send("Producto eliminado correctamente.");
      })
      .catch((err) => res.status(500).end());
});

const producto =[ 
    {
    price: 2300,
    name: 'destornillador'},
    {
    price: 2100,
    name: 'metro'
    }

]

class Contenedor {
    
    create(){
        knex.schema
        .createTable("productos", (table) => {
          table.increments("id");
          table.string("name");
          table.integer("price");
        })
        .then(() => {
          console.log(`Table productos created`);
        })
        .catch((err) => {
          console.log(err);
        })
        .finally(() => {
          knex.destroy;
        });
    } 

    getById(){
        app.get("/productos/:id", (req, res) => {
            const { id } = req.params;
            knex
              .from("productos")
              .select("*")
              .where({ id })
              .then((row) => {
                res.json(row);
              })
              .catch((err) => {
                console.log(err);
                res.status(500).end();
              });
          });
    }

    getAll(){
        app.get("/productos", (req, res) => {
            knex
              .from("productos")
              .select("*")
              .then((rows) => {
                res.json(rows);
              })
              .catch((err) => {
                console.log(err);
                res.status(500).end();
              });
          });
    }

    insert(){
        knex("productos")
        .insert(producto)
        .then(() => {
          console.log("productos inserted");
        })
        .catch((err) => {
          console.log(err);
        })
        .finally(() => {
          knex.destroy();
        });
    }

    put(){
        app.put("/productos", (req, res) => {
            const name = req.body.name;
            const price = req.body.price;
            knex.from("productos").where({name: name}).update({prices:price})
            .then((rows) => {
              res.json(rows)
            })
            .catch((error) => {
              console.log("Ocurrio un error en el update",error)
            })
          })
    }
}

const productos = new Contenedor;


app.listen(3000);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
