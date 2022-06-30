const { BadRequestError, UnauthorizedError} = require("../utils/errors")
const db = require("../../db")


class User{

    static async login(credentials) {
        throw new BadRequestError(`Missing login in request body`);
           
    }

    static async register(credentials) {
        throw new BadRequestError(`Missing email in request body`);
           
    }

   

}

module.exports = User