import { sql } from "./pg-sql.js";

(async () =>{
    try {
        await sql`DROP TABLE IF EXISTS videos`;

        await sql`
            CREATE TABLE videos (
                id SERIAL PRIMARY KEY,
                title VARCHAR(255),
                description TEXT,
                duration INTEGER
            )
        `;

        console.log("Database initialized with correct table structure!");
    } catch(err) {
        console.error(err);
    } finally {
        console.log("Exiting...");

        process.exit();
    }
})();
