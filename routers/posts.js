const express = require('express');
const router = express.Router()
const posts = require('../data/posts')

router.get('/', (req, res) => {
    res.send('Return all posts')
})

router.get('/:slug', (req,res) => {
    const postSlug = req.params.slug
    res.send(`show the post with slug: ${postSlug}`)
})

router.post('/', (req,res) => {
    res.send('create a new post')
})

router.put('/:slug', (req,res) => {
    const postSlug = req.params.slug
    res.send(`update the post with slug: ${postSlug}`)
})

router.patch('/:slug', (req,res) => {
    const postSlug = req.params.slug
    res.send(`modify the post with slug: ${postSlug}`)
})

router.delete('/:slug', (req,res) => {
    const postSlug = req.params.slug
    res.send(`delete the post with slug: ${postSlug}`)
})

module.exports = router
