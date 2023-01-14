import express from "express"
import authController from "../controllers/authController"

let router = express.Router();

const authRoute = (app) => {
    router.get("/", (req, res) => {
        res.json("hello")
    })
    router.get('/signUp', authController.signUp)
    // router.post('/signIn', )

    return app.use("/", router);
};

export default authRoute;