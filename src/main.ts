import { createBot, GatewayIntents, startBot } from "discordeno";
import "./config.ts";
import { registerMessageCreateHandler } from "./events/message_create.ts";
import { registerReadyHandler } from "./events/ready.ts";

const bot = createBot({
  token: Deno.env.get("DISCORD_TOKEN")!,
  intents: GatewayIntents.Guilds | GatewayIntents.GuildMessages,
});

registerReadyHandler(bot);
registerMessageCreateHandler(bot);

await startBot(bot);
