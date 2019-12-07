'use strict'

class CreatePost {
  get rules () {
      return {
        user_id: 'required',
        title: 'required',
        description: 'required',
        category_id: 'required'
      }
  }

  get messages () {
    return {
      'user_id.required': 'user_id is required',
      'title.required': 'title is required',
      'description.required': 'post description is required',
      'category_id.required': 'category_id is required'
    }
  }

  async fails (errorMessages) {
    return this.ctx.response.status(422).send(errorMessages)
  }
}

module.exports = CreatePost
