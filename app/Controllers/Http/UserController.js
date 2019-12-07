'use strict'
const Logger = use('Logger');
const User = use('App/Models/User');
const Post = use('App/Models/Post');
const R = require('ramda');
const Env = use('Env');

class UserController {

    async signUp({ request, response }) {
        const body = request.post()
        let usr = await User.where({ email: body.email }).fetch()
        if(usr) {
            return response.status(422).send({ message: "Email already exists"})
        }
        let user = await User.forge(body).save()
        return response.status(201).send({ message: "Signup success" })
    }

    async signIn({ request, response }) {
        const body = request.post();
        let authUser = {};
            let user = await User.where({ email: body.email, password: body.password }).fetch()
            if(user) {
                authUser =  { ...user.toJSON(), token: Env.get('APP_KEY') }
                return response.status(200).send(authUser);
            }
            return response.status(401).send({ message: "Invalid email or password"});
    }

    async userPosts({ request, response }) {
        // const body = request.post()
        try {
            const userPosts = await User.where('id', 19).fetch({ withRelated:['posts'] });
            return response.status(200).send(userPosts.toJSON())
        } catch(e) {
            return response.status(400).send({ message: e.message })
        }
    }
}

module.exports = UserController
