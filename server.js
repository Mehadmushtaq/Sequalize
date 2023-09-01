const Sequelize = require("sequelize");
const sequelize = new Sequelize( //instance
  "hello_world_db", //db_name
  "root", //username
  "12345", //password
  {
    host: "localhost", //host-localhost/127.0.0.1
    dialect: "mysql",
  }
);

//Promise
sequelize
  .authenticate()
  .then(() => {
    console.log("Connection has been established successfully.");
  })
  .catch((error) => {
    console.error("Unable to connect to the database: ", error);
  });
