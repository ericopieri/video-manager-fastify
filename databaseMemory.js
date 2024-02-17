import { randomUUID } from "node:crypto";


export default class DatabaseMemory {
    #videos = new Map();

    create(video) {
        const id = randomUUID();

        this.#videos.set(id, video);
    }

    read(search) {
        const videos = Array.from(this.#videos.entries()).map(([id, data]) => ({ id, ...data }));

        if (search !== undefined) {
            return videos.filter(video => video.title.includes(search));
        }

        return videos;
    }

    update(id, video) {
        this.#videos.set(id, video);
    }

    delete(id) {
        this.#videos.delete(id);
    }
}
