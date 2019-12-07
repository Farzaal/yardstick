'use strict'

class SignUp {
  get rules () {
    return {
      first_name: 'required',
      last_name: 'required',
      email: 'required|email',
      password: 'required'
    }
  }

  get messages () {
    return {
      'first_name.required': 'first name is required',
      'last_name.required': 'last name is required',
      'email.required': 'email is required',
      'password.required': 'password is required'
    }
  }

  async fails (errorMessages) {
    return this.ctx.response.status(422).send(errorMessages)
  }
}

module.exports = SignUp
