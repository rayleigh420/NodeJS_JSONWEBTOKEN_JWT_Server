import express from "express"
import actionController, { action } from "../controllers/actionController"

let router = express.Router();

const actionRoute = (app) => {
    router.get("/", actionController.action)

    return app.use("/action", router);
};

export default actionRoute;
