const { helloHandler } = require("../handlers")

const router = require("express").Router()

router.get('/hello', helloHandler)

module.exports = {
    router
};