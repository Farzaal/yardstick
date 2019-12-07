'use strict'
const bookshelf = require('../../config/bookshelf').bookshelf;
const R = require("ramda");

const Post = bookshelf.Model.extend({
  tableName: 'posts',
  requireFetch: false,      // MUST NOT THROW ERROR IF QUERY HAS NO RESULT 
  hasTimestamps: true,
});

module.exports = Post
