import { load as loadDotenv } from "std/dotenv/mod.ts";

const dotenv = await loadDotenv();
for (const [key, value] of Object.entries(dotenv)) {
  Deno.env.set(key, value);
}
