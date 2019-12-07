'use strict'
const Env = use('Env')
const R = require('ramda')

class TokeValidator {

  async handle ({ request, response }, next) {
    const token = Env.get('APP_KEY')
    const authHeader = request.header('Authorization')
    if(!authHeader) {
      return response.status(401).send({ message: 'Unauthorized Access' })
    }
    if(!R.equals(authHeader, token)) {
      return response.status(401).send({ message: 'Invalid Token' })
    }
    await next()
  }
}

module.exports = TokeValidator
