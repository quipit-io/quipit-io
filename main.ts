/// <reference no-default-lib=\"true\" />
/// <reference lib=\"dom\" />
/// <reference lib=\"dom.iterable\" />
/// <reference lib=\"dom.asynciterable\" />
/// <reference lib=\"deno.ns\" />

import \"$std/dotenv/load.ts\";

import { start } from \"$fresh/server.ts\";
import manifest from \"./fresh.gen.ts\";
import config from \"./fresh.config.ts\";
import Clerk from \"@clerk/clerk-js\";

const clerk = new Clerk(\"pk_test_bWVldC1jcmF3ZGFkLTE4LmNsZXJrLmFjY291bnRzLmRldiQ\");
await clerk.load();

await start(manifest, config);