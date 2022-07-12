const { helloHandler } = require("../handlers")
const { Router } = require("express")
const router = Router()

router.get('/hello', helloHandler)

module.exports = {
    router
};