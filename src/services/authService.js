import User from "../models/User";
import bcrypt from "bcrypt"

const salt = bcrypt.genSaltSync(10);

let handleSignUp = async (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            let userData = {};
            let check = false
            // await checkUserEmail(data.email);
            if (check == false) {
                let hashPassWordFromBcrypt = await hashUserPassword(data.password);

                const newUser = await new User({
                    userName: data.userName,
                    email: data.email,
                    password: hashPassWordFromBcrypt
                })

                const user = await newUser.save()

                userData.status = 200
                userData.user = user
            } else {
                userData.errCode = 1;
                userData.errMessage = "Email is exist";
            }
            resolve(userData);
        } catch (e) {
            console.log(e);
        }
    });
};

let hashUserPassword = (password) => {
    return new Promise(async (resolve, reject) => {
        try {
            let hashPassWord = await bcrypt.hashSync(password, salt);
            resolve(hashPassWord);
        } catch (e) {
            reject(e);
        }
    });
};

module.exports = {
    handleSignUp
}

