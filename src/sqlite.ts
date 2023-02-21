const MySqlite =  require('nexo-npm-node-sqlite')
const my_logger =  require('nexo-npm-node-logger')

MySqlite.url("./db.sqlite3")
MySqlite.onConnected(async () => {
    my_logger.i("Connected to the database");
});
MySqlite.onFailure((err) => {
    my_logger.e("Unable to connect to the database", err)
});
MySqlite.initialize()

module.exports = MySqlite
