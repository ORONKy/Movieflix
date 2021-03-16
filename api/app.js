const express = require("express")
const session = require("express-session")
const groupController = require("./controllers/groupController")
const body_parser = require("body-parser")
const app = express()

app.listen(3000)

//Middle ware
app.use(body_parser.json());

//Api cals
app.get("/films/:id", groupController.get_films_group)
app.post("/films/:id", groupController.post_films_group)
app.get("/result/:id", groupController.get_result_group)
app.post("/group/create", groupController.post_create_newgroup)

