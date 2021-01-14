const Sequelize = require("sequelize");
const sequelize = new Sequelize("design", "root", "sktssa", {
    dialect: "mysql",
    host: "localhost",
});

module.exports = sequelize;
