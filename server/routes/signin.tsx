// import { OAuth2Client } from "https://deno.land/x/oauth2_client/mod.ts";

// const oauth2Client = new OAuth2Client({
//     clientId: Deno.env.get("CLIENT_ID")!,
//     clientSecret: Deno.env.get("CLIENT_SECRET")!,
//     authorizationEndpointUri: "hhttps://discord.com/oauth2/authorize",
//     tokenUri: "https://discord.com/api/oauth2/token",
//     redirectUri: "http://localhost:8000/oauth2/callback",
//     defaults: {
//         scope: "identify",
//     },
// });

// /** This is where we'll store our state and PKCE codeVerifiers */
// const loginStates = new Map<string, { state: string; codeVerifier: string }>();
// /** The name we'll use for the session cookie */
// const cookieName = "session";

// export const handler: Handlers = {
//     async GET(req, ctx) {
//         const url = new URL(req.url);
//         const handle = url.searchParams.get("handle") || "";
//         const textResponse = await fetch(`https://robertsspaceindustries.com/citizens/${handle}`);
//         const textData = await textResponse.text();
//         const document = new DOMParser().parseFromString(textData, "text/html");
//         let bio = null;
//         if (document) {
//             bio = document.querySelector(".entry.bio")?.querySelector(".value");
//         }
//         const isVerified = bio?.textContent.includes(verficationCode);
//         return ctx.render({ isVerified });
//     },
// };

import DenoGrant, {
    Providers,
} from "https://deno.land/x/deno_grant@v0.3.0/mod.ts";

const denoGrant = new DenoGrant({
    base_uri: "http://localhost:8000",
    strategies: [{
        provider: Providers.discord,
        client_id: Deno.env.get("CLIENT_ID")!,
        client_secret: Deno.env.get("CLIENT_SECRET")!,
        redirect_path: "/auth/discord",
        scope: "identify",
    }]
});

const discordAuthorizationURI = denoGrant.getAuthorizationUri(Providers.discord)!.toString();

export function handler(req: Request): Response {
    return Response.redirect(discordAuthorizationURI);
}