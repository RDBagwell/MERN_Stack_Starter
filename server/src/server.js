const http = require('http');
const app = require('./app');

const { mongoConnect } = require('../services/mongo_config');
const { mysqlConnect } = require('../services/mysql_config');
const PORT = process.env.PORT || 8000;
const server = http.createServer(app);

async function startServer() {
    await mongoConnect();
    await mysqlConnect();

    server.listen(PORT, ()=>{
        console.log(`Listing on port ${PORT}...`);
    })
}
startServer();