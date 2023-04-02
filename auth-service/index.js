import express from "express"
import bodyParser from "body-parser"
import Router from "./router.js"
import "./connections/database.js"

const app = express()

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use(Router)
app.use(express.static("docs"))

app.listen(process.env.PORT, function(error) {
	if (error) {
		console.error("Application failed, stopping server.", error)
		process.exit(1)
	}

	console.info("Application is running.")
})
