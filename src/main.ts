import { createBot, GatewayIntents, startBot } from "discordeno";
import "./config.ts";
import { registerReadyHandler } from "./events/ready.ts";

const bot = createBot({
  token: Deno.env.get("DISCORD_TOKEN")!,
  intents: GatewayIntents.Guilds | GatewayIntents.GuildMessages,
});

registerReadyHandler(bot);

await startBot(bot);
