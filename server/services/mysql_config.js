const { Sequelize } = require('sequelize');

const db = process.env.MYSQL_DATABASE;
const db_username = process.env.MYSQL_USERNAME;
const db_password = process.env.MYSQL_PASSWORD;
const host = process.env.MYSQL_HOST;

const sequelize = new Sequelize(db, db_username, db_password, {
    host: host,
    dialect: 'mysql'
  });

async function mysqlConnect() {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
      } catch (error) {
        console.error('Unable to connect to the database:', error);
      }
}

async function mysqlDisconnect() {
    await sequelize.close();
}

module.exports = {
    mysqlConnect,
    mysqlDisconnect
}