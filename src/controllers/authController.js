import authService from "../services/authService"

const authController = {
    signUp: async (req, res) => {
        try {
            let userData = await authService.handleSignUp(req.body)
            if (userData.status == 200) {
                res.cookie("refreshToken", userData.user.refreshToken, {
                    httpOnly: true,
                    secure: false,
                    path: "/",
                    sameSite: "strict",
                })
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
                res.cookie("refreshToken", userData.user.refreshToken, {
                    httpOnly: true,
                    secure: false,
                    path: "/",
                    sameSite: "strict",
                })
                res.status(userData.status).json(userData.user)
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