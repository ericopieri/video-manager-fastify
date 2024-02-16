import { randomUUID } from "node:crypto";


export default class DatabaseMemory {
    #videos = new Map();

    create(video) {
        const id = randomUUID();

        this.#videos.set(id, video);
    }

    read() {
        return Array.from(this.#videos.values());
    }

    update(id, video) {
        this.#videos.set(id, video);
    }

    delete(id) {
        this.#videos.delete(id);
    }
}
