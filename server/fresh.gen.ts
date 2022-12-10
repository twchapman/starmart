// DO NOT EDIT. This file is generated by fresh.
// This file SHOULD be checked into source version control.
// This file is automatically updated during development when running `dev.ts`.

import config from "./deno.json" assert { type: "json" };
import * as $0 from "./routes/[name].tsx";
import * as $1 from "./routes/api/listings.ts";
import * as $2 from "./routes/api/listings/[id].tsx";
import * as $3 from "./routes/api/verify.ts";
import * as $4 from "./routes/index.tsx";
import * as $5 from "./routes/signin.tsx";
import * as $6 from "./routes/verification.tsx";
import * as $$0 from "./islands/Searchbar.tsx";

const manifest = {
  routes: {
    "./routes/[name].tsx": $0,
    "./routes/api/listings.ts": $1,
    "./routes/api/listings/[id].tsx": $2,
    "./routes/api/verify.ts": $3,
    "./routes/index.tsx": $4,
    "./routes/signin.tsx": $5,
    "./routes/verification.tsx": $6,
  },
  islands: {
    "./islands/Searchbar.tsx": $$0,
  },
  baseUrl: import.meta.url,
  config,
};

export default manifest;
