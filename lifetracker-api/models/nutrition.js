const { BadRequestError, UnauthorizedError} = require("../utils/errors")
const db = require("../db")


class Nutrition {
    static async listNutritionForUser({user}){
        const results = await db.query(
            `SELECT n.id AS "nutritionId",
                    n.name AS "name",
                    n.category AS "category",
                    n.calories AS "calories",
                    n.image_url AS "image",
                    n.quantity AS "quantity",
                    to_char(n.created_at, 'MM/DD/YYYY') AS "created"
            FROM nutrition AS n
                JOIN users AS u ON u.id = n.user_id
            WHERE n.user_id = (
                SELECT id FROM users WHERE email = $1
            );

            `,

            [user.email]

        );

        return results.rows;

    } 

    static async createNutrition({nutrition, user}){

        const requiredFields = ["name", "category", "quantity", "calories", "image"];

        requiredFields.forEach(field => {
            if(!nutrition.hasOwnProperty(field)) {
                throw new BadRequestError(`Missing ${field} in request body`);
            }
        })

        const results = await db.query(`
            INSERT INTO nutrition (
                name,
                category,
                quantity,
                calories,
                image_url,
                user_id
            )
            VALUES ($1, $2, $3, $4, $5, (SELECT id FROM users WHERE email=$6))
            RETURNING id, name, category, quantity, calories, image_url, user_id, created_at
        `, [nutrition.name, nutrition.category, nutrition.quantity, nutrition.calories, nutrition.image, user.email]

        );
        const theNutrition = results.rows[0];
        return theNutrition;
    }
}

module.exports = Nutrition