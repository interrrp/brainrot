import { Bot } from "discordeno";

export function registerReadyHandler(bot: Bot): void {
  bot.events.ready = (_, { user }) => {
    console.log(`Ready as ${user.username}#${user.discriminator}`);
  };
}
