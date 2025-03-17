// import the data
const { log } = require('console')
const posts = require('../data/posts')

function index (req, res) {

    let filteredPosts = posts

    if (req.query.tag){
        filteredPosts = posts.filter(post => post.tags.includes(req.query.tag))
    }
    
    res.json(filteredPosts)
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

    const newSlug = req.body.slug

    const newPost = {
        title: req.body.title,
        slug: newSlug,
        content: req.body.content,
        image: req.body.image,
        tags: req.body.tags
    }

    posts.push(newPost)

    console.log(req.body);
    console.log(posts);
    
    res.status(201)
    res.json(newPost)
    //res.send('create a new post')
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

    // find the pizza with the slug
    const post = posts.find(post => post.slug === postSlug);

    // handle 404 error
    if (!post){
        return res.status(404).json({
            error: '404 not found',
            message: 'post not found'
        })
    };

    // remove the post
    posts.splice(posts.indexOf(post), 1);
    res.sendStatus(204);

    console.log(posts);
}

module.exports = {
    index,
    show,
    create,
    update,
    modify,
    destroy
}