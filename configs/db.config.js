const {Sequelize} = require("sequelize")

const dbInstance = new Sequelize({
    dialect: "sqlite",
    storage: "data/database.sqlite"
})

module.exports = dbInstance