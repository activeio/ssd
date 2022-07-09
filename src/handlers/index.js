function helloHandler(req, res) {
    res.json({ msg: "hello world" })
}

module.exports = {
    helloHandler
}