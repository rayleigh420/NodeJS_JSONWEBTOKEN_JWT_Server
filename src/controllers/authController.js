import authService from "../services/authService"

const authController = {
    signUp: async (req, res) => {
        try {
            let userData = await authService.handleSignUp(req.body)
            console.log(userData)
            res.status(userData.status).json(userData.user)
        } catch (err) {
            res.status(500).json(err);
        }
    }
}

module.exports = authController