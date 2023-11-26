import { createBot, GatewayIntents, startBot } from "discordeno";
import "./config.ts";

const bot = createBot({
  token: Deno.env.get("DISCORD_TOKEN")!,
  intents: GatewayIntents.Guilds | GatewayIntents.GuildMessages,
});

await startBot(bot);
