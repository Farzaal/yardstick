'use strict'
const bookshelf = require('../../config/bookshelf').bookshelf;
const Post = use('App/Models/Post');
const R = require("ramda");

const User = bookshelf.Model.extend({
  tableName: 'users',
  requireFetch: false,      // MUST NOT THROW ERROR IF QUERY HAS NO RESULT 
  hasTimestamps: true,
  hidden: ['password', 'is_active', 'email_verified', 'token', 'uuid'],

  posts() {
    return this.hasMany(Post, 'user_id')
  }

});

module.exports = User
