import { randomUUID } from "node:crypto";
import { sql } from "./pg-sql.js";


export default class Database {
    #videos = new Map();

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

    update(id, video) {
        this.#videos.set(id, video);
    }

    delete(id) {
        this.#videos.delete(id);
    }
}
