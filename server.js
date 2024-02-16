import { fastify } from "fastify";
import { exit } from "node:process";

import DatabaseMemory from "./databaseMemory.js";

const server = fastify();

const database = new DatabaseMemory();

server.post("/videos", (request, reply) => {
    const { title, description, duration } = request.body;

    database.create({
        title,
        description,
        duration
    });

    return reply.status(201).send();
});

server.get("/videos", () => {
    const videos = database.read();

    return videos;
});

server.put("/videos/:id", (request, reply) => {
    const videoId = request.params.id;

    const { title, description, duration } = request.body;

    database.update(videoId, {
        title,
        description,
        duration
    });

    return reply.status(204).send();
});

server.delete("/videos/:id", (request, reply) => {
    const videoId = request.params.id;

    database.delete(videoId);

    return reply.status(204).send();
});

server.listen({ port: 3000 }, (err, address) => {
    if (err) {
        console.error(err);
        exit(1);
    }
});
