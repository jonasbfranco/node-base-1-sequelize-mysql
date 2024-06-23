//const router = require('express').Router()
const express = require('express')
const router = express.Router()


router.get('/tasks', (req, res) => {
    res.status(200).send('Hello World')
})

module.exports = router