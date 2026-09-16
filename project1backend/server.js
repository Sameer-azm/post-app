const dotenv = require('dotenv');
dotenv.config();

const app = require('./src/app.js');
const main = require('./config/db.js');

main();

app.get('/', (req, res) => {
    res.send('Hello World');
});

module.exports = app;