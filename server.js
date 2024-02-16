import { fastify } from "fastify";
import { exit } from "node:process";

import DatabaseMemory from "./databaseMemory.js";

const server = fastify();

const database = new DatabaseMemory();

server.post("/videos", (request, reply) => {
    database.create({
        title: "Video 01",
        description: "Description 01",
        duration: 3000
    });

    console.log(database.read());

    return reply.status(201).send();
});

server.get("/videos", () => {
    // GET request handler
});

server.put("/videos/:id", () => {
    // PUT request handler
});

server.delete("/videos/:id", () => {
    // DELETE request handler
});

server.listen({ port: 3000 }, (err, address) => {
    if (err) {
        console.error(err);
        exit(1);
    }
});
