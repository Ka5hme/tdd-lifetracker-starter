const { BadRequestError, UnauthorizedError} = require("../utils/errors")
const db = require("../db")


class User{

    static async login(credentials) {
        const requiredFields = ["email", "password"] 
        requiredFields.forEach(field => {
            if(!credentials.hasOwnProperty(field)) {
                throw new BadRequestError(`Missing ${field} in request body`);
            }
        })
           
    }

    static async register(credentials) {
        const requiredFields = ["email", "username", "first_name", "last_name", "password"];

        requiredFields.forEach(field => {
            if(!credentials.hasOwnProperty(field)) {
                throw new BadRequestError(`Missing ${field} in request body`);
            }
        })

        if(credentials.email.indexOf("@")<=0){
            throw new BadRequestError("Invalid email.")
        }

        const existingUser = await User.fetchUserByEmail(credentials.email);
        if (existingUser) {
            throw new BadRequestError(`Duplicate email: ${credentials.email}`);
        }

        const lowerCasedEmail = credentials.email.toLowerCase();
        
        const existingUserName = await User.fetchUserByEmail(credentials.username);
        if (existingUserName) {
            throw new BadRequestError(`Duplicate username: ${credentials.username}`);
        }

        const lowerCasedUsername = credentials.username.toLowerCase();

        const result = await db.query(`
            INSERT INTO users (
                email,
                username,
                first_name,
                last_name,
                password
            )
            VALUES ($1, $2, $3, $4, $5)
            RETURNING id, email, username, first_name, last_name, password, created_at, updated_at;
        `, [lowerCasedEmail, lowerCasedUsername, credentials.first_name, credentials.last_name, credentials.password])
        // Return user
        const user = result.rows[0];
 
        return user;
    }






    static async fetchUserByEmail(email) {
        if (!email) {
            throw new BadRequestError("No email provided");
        }
        const query = `SELECT * FROM users WHERE email = $1`;
        const result = await db.query(query, [email.toLowerCase()]);
        const user = result.rows[0];
        return user;
    }

}

module.exports = User