'use strict'
const Env = use('Env')

const knex = require('knex')({
  client: 'mysql',
  connection: {
    host: Env.get('DB_DATABASE_MYSQL_HOST', 'localhost'),
    user: Env.get('DB_DATABASE_MYSQL_USER', 'root'),
    password: Env.get('DB_DATABASE_MYSQL_PASSWORD', 'root'),
    database: Env.get('DB_DATABASE_MYSQL_DATABASE', 'campus_gruv'),
    port: Env.get('DB_DATABASE_MYSQL_PORT', 3306),
    charset: 'utf8'
  }
})

const bookshelf = require('bookshelf')(knex)

bookshelf.plugin(require('bookshelf-scopes'))


module.exports = { bookshelf }
