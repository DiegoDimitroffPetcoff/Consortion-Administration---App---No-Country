require('dotenv').config()

module.exports = {
    MONGO_URI: process.env.MONGO_URI || "FALTA BASE DE DATOS",
    PORT: process.env.PORT || 8080
}