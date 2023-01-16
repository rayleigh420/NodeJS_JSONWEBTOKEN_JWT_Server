import User from "../models/User";
import bcrypt from "bcrypt"

const salt = bcrypt.genSaltSync(10);

let handleSignUp = async (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            let userData = {};
            let check = await checkUserEmail(data.email);
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
                userData.status = 404;
                userData.mess = "Email is exist";
            }
            resolve(userData);
        } catch (e) {
            console.log(e);
        }
    });
};

let handleSignIn = async (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            let userData = {};
            let check = await checkUserEmail(data.email);
            if (check == true) {
                let user = await User.findOne({
                    email: data.email
                });

                if (user) {
                    let check = await bcrypt.compare(data.password, user.password);

                    if (check) {
                        userData.status = 200;
                        userData.mess = "Login Sucess";

                        delete user.password;
                        userData.user = user;
                    } else {
                        userData.status = 404;
                        userData.mess = "Wrong password";
                    }
                } else {
                    userData.status = 404;
                    userData.mess = `User not found`;
                }
            } else {
                userData.errCode = 404;
                userData.mess = "Email is not exist";
            }

            resolve(userData);
        } catch (e) {
            console.log(e);
        }
    });
};

let checkUserEmail = async (email) => {
    return new Promise(async (resolve, reject) => {
        try {
            let user = await User.findOne({
                email: email
            });
            if (user) {
                resolve(true);
            } else {
                resolve(false);
            }
        } catch (e) {
            reject(e);
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
    handleSignUp, handleSignIn
}

