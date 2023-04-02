import express from "express"
import renewController from "./controllers/renew-controller.js"
import tokenController from "./controllers/token-controller.js"

const Router = express.Router()

Router.post("/token", tokenController)
Router.post("/token/renew", renewController)

export default Router
