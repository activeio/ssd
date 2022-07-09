const express = require("express")
require("dotenv").config()
const { router } = require("./src/routes")

const app = express();

app.use(express.json())
app.use("/api", router);

const port = process.env.PORT || 3000
app.listen(port, () => {
    console.log(`server starting at ${port}`)
})