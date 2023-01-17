import authService from "../services/authService"

const authController = {
    signUp: async (req, res) => {
        try {
            let userData = await authService.handleSignUp(req.body)
            if (userData.status == 200) {
                res.status(userData.status).json(userData.user)
            }
            else {
                res.status(userData.status).json(userData.mess)
            }
        } catch (err) {
            res.status(500).json(err);
        }
    },
    signIn: async (req, res) => {
        try {
            let userData = await authService.handleSignIn(req.body)
            if (userData.status == 200) {
                res.status(userData.status).json({
                    user: userData.user,
                    accessToken: userData.accessToken,
                    refreshToken: userData.refreshToken
                })
            }
            else {
                res.status(userData.status).json(userData.mess)
            }
        } catch (err) {
            res.status(500).json(err);
        }
    }
}

module.exports = authController