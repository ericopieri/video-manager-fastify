import { randomUUID } from "node:crypto";
import { sql } from "./pg-sql.js";


export default class Database {
    async create(video) {
        try {
            await sql`
                INSERT INTO videos (title, description, duration) VALUES (${video.title}, ${video.description}, ${video.duration})
            `;
        } catch (err) {
            console.error(err);
        }
    }

    async read(search) {
        if (search !== undefined) {
            return await sql`SELECT * FROM videos WHERE title ILIKE '%' || ${search} || '%'`;
        }

        return await sql`SELECT * FROM videos`;
    }

    async update(id, video) {
        try {
            await sql`
                UPDATE videos
                SET title = ${video.title}, description = ${video.description}, duration = ${video.duration}
                WHERE id = ${id}
            `;
        } catch (err) {
            console.error(err);
        }
    }

    async delete(id) {
        try {
            await sql`DELETE FROM videos WHERE id = ${id}`;
        } catch (err) {
            console.error(err);
        }
    }
}
