// import the data
const posts = require('../data/posts')

function index (req, res) {
    res.json(posts)
}

function show (req,res) {
    const postSlug = req.params.slug

    // find the pizza with the slug
    const post = posts.find(post => post.slug === postSlug)

    // handle 404 error
    if (!post){
        return res.status(404).json({
            error: '404 not found',
            message: 'post not found'
        })
    }

    // return the post
    res.json(post)
}

function create (req,res) {
    res.send('create a new post')
}

function update (req,res) {
    const postSlug = req.params.slug
    res.send(`update the post with slug: ${postSlug}`)
}

function modify (req,res) {
    const postSlug = req.params.slug
    res.send(`modify the post with slug: ${postSlug}`)
}

function destroy (req,res) {
    const postSlug = req.params.slug
    res.send(`delete the post with slug: ${postSlug}`)
}

module.exports = {
    index,
    show,
    create,
    update,
    modify,
    destroy
}