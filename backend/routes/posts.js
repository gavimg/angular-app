const express = require('express');

const checkAuth = require('../middleware/check-auth');

const router = express.Router();

const PostController = require('../controllers/post');

const extractFile = require('../middleware/file');

router.post('', checkAuth, extractFile, PostController.createPost)

router.put('/:id', checkAuth, extractFile, PostController.updatePost)

router.get('', PostController.getPost)

router.get('/:id', PostController.getPosts)

router.delete('/:id', checkAuth, PostController.deletePost)

module.exports = router;
