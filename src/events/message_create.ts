import { Bot } from "discordeno";
import { randomElement } from "../utils.ts";

const BRAINROT_WORDS = [
  "skibidi toilet",
  "skibidi",
  "ohio",
  "rizz",
  "kai cenat",
  "gyat",
  "grimace shake",
];

export function registerMessageCreateHandler(bot: Bot): void {
  bot.events.messageCreate = async (bot, message) => {
    if (message.isFromBot) return;

    if (shouldSendCorrection()) {
      await bot.helpers.sendMessage(
        message.channelId,
        {
          content: `**Did you mean:**\n${correct(message.content)}`,
          messageReference: { messageId: message.id, failIfNotExists: false },
        },
      );
    }
  };
}

function correct(message: string): string {
  const words = message.split(" ");

  const numIncorrectWords = Math.floor(words.length / 3);
  for (let i = 0; i < numIncorrectWords; i++) {
    const randomIndex = Math.floor(Math.random() * words.length);
    const randomWord = randomElement(BRAINROT_WORDS);
    words[randomIndex] = `**${randomWord}**`;
  }

  return words.join(" ");
}

function shouldSendCorrection(): boolean {
  return Math.random() > 0.8;
}
