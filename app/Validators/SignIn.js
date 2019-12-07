'use strict'

class SignIn {
  get rules () {
    return {
      email: 'required|email',
      password: 'required',
    }
  }

  get messages () {
    return {
      'email.required': 'email is required',
      'password.required': 'password is required'
    }
  }

  async fails (errorMessages) {
    return this.ctx.response.status(422).send(errorMessages)
  }
}

module.exports = SignIn
