import { DOMParser } from "https://deno.land/x/deno_dom/deno-dom-wasm.ts";

import { Handlers } from "$fresh/server.ts";

export const handler: Handlers = {
    async GET(req) {
        const textResponse = await fetch("https://robertsspaceindustries.com/citizens/sovereignnation");
        const textData = await textResponse.text();
        const document = new DOMParser().parseFromString(textData, "text/html");
        const bio = document.querySelector(".entry.bio")?.querySelector(".value");
        console.log(bio.textContent);
        return new Response(JSON.stringify(false), {
            headers: { "Content-Type": "application/json" },
        });
    },
};

