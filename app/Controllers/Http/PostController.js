'use strict'
const Post = use('App/Models/Post');

class PostController {

    async createPost({ request, response }) {
        const text = `Lorem ipsum dolor sit amet, elaboraret definitiones eu nec. Atqui fierent accusamus pro ea, sit ferri definitionem at. No eirmod aliquando cum, no vis summo ridens, id eum esse oratio. Inani utroque in est, at iracundia pertinacia has. Eu nec lucilius imperdiet.`
        const body = request.post()
        for(let i = 0; i < 10; i++) {
            let post = await Post.forge({
                user_id: request.body.user_id,
                campus_id: 1,
                title: `Fabrica Post ${i}`,
                description: text,
                category_id: request.body.category_id
            }).save()
        }
        return response.status(201).send({ message: 'Post Success' })
    }
}

module.exports = PostController
