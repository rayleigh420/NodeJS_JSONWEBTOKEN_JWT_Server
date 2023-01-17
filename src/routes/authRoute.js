import express from "express"
import authController from "../controllers/authController"

let router = express.Router();

const authRoute = (app) => {
    router.post('/signUp', authController.signUp)
    router.post('/signIn', authController.signIn)
    router.post('/refresh', authController.refresh)

    return app.use("/", router);
};

export default authRoute;