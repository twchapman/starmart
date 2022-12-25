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

export async function handler(req: Request): Response {
    const callbackUrl = new URL(req.url);
    const callbackParams = callbackUrl.searchParams;
    const code = callbackParams.get('code');
    if (!code) {
        throw new Error("Missing code in auth callback.");
    }
    const token = await denoGrant.getToken(Providers.discord, `http://localhost:8000/auth/discord?code=${code}`);

    if (token && "accessToken" in token) {
        const profile = await denoGrant.getProfile(
            Providers.discord,
            token.accessToken,
        );
        return Response.json(profile);
    }

    return Response.error();
}