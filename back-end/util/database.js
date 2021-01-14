const Sequelize = require("sequelize");
const sequelize = new Sequelize("design", "root", "vasudevam@2010", {
    dialect: "mysql",
    host: "localhost",
});

module.exports = sequelize;
