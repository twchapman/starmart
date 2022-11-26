import { useState } from "preact/hooks";

import { DOMParser } from "https://deno.land/x/deno_dom/deno-dom-wasm.ts";

import { Handlers } from "$fresh/server.ts";

interface VerificationData {
    // handle: string;
    // verificationCode: string;
    isVerified: boolean;
}

const verficationCode = crypto.randomUUID();

export const handler: Handlers<VerificationData> = {
    async GET(req, ctx) {
        const url = new URL(req.url);
        const handle = url.searchParams.get("handle") || "";
        const textResponse = await fetch(`https://robertsspaceindustries.com/citizens/${handle}`);
        const textData = await textResponse.text();
        const document = new DOMParser().parseFromString(textData, "text/html");
        let bio = null;
        if (document) {
            bio = document.querySelector(".entry.bio")?.querySelector(".value");
        }
        const isVerified = bio?.textContent.includes(verficationCode);
        return ctx.render({ isVerified });
    },
};

export default function Verification({ data }: PageProps<VerificationData>) {
    const { isVerified } = data;

    return (<div>
        <span>To ensure the best experience possible, we require users to verify their Roberts Space Industries® account before being able to list or offer for items. Please enter your RSI handle below, then add the generated code somewhere in the <a href="https://robertsspaceindustries.com/account/profile">Short Bio section</a>, then click Verify.</span>
        <form>
            <label>RSI handle: <input type="text" name="handle" /></label>
            <label>Verification code: <span>{verficationCode}</span></label>
            <span><button type="submit">Verify</button></span>
            {isVerified ? <span>Success!</span> : null}
        </form>
    </div>);
}