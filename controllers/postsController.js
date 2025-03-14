// import the data
const posts = require('../data/posts')

function index (req, res) {
    res.send('Return all posts')
}

function show (req,res) {
    const postSlug = req.params.slug
    res.send(`show the post with slug: ${postSlug}`)
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