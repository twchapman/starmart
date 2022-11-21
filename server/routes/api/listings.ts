import { Handlers } from "$fresh/server.ts";

const items = [
    { name: "item a" },
    { name: "item b" },
    { name: "item c" },
    { name: "item d" },
    { name: "item e" },
    { name: "item f" },
    { name: "item g" },
    { name: "item h" },
    { name: "item i" },
    { name: "item j" },
    { name: "item k" },
    { name: "item l" },
];

export const handler: Handlers = {
    async GET(req, _ctx) {

    },

    async POST(req, _ctx) {
        const badWordsCleaner = await badWordsCleanerLoader.getInstance();
        const name = badWordsCleaner.clean(await req.text());
        const database = await databaseLoader.getInstance();
        const roomId = await database.ensureRoom(name);

        return new Response(roomId, {
            status: 201,
        });
    },
};