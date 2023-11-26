import { Bot } from "discordeno";

export function registerMessageCreateHandler(bot: Bot): void {
  bot.events.messageCreate = async (bot, message) => {
    if (message.isFromBot) return;

    if (shouldSendCorrection()) {
      await bot.helpers.sendMessage(
        message.channelId,
        {
          content: "**Did you mean:**\nSkibidi toilet ohio rizz",
          messageReference: { messageId: message.id, failIfNotExists: false },
        },
      );
    }
  };
}

function shouldSendCorrection(): boolean {
  return true;
}
