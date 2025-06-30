const mineflayer = require("mineflayer");

function createBot() {
  const bot = mineflayer.createBot({
    host: "NqouchaTeam.aternos.me",
    port: 43107,
    username: "mysterious_afk",
    version: "1.21.6"
  });

  bot.on("spawn", () => {
    console.log("✅ Logged in!");
    bot.chat("AFK Bot is now online!");
  });

  bot.on("end", () => {
    console.log("❌ Bot disconnected, reconnecting...");
    setTimeout(createBot, 5000);
  });

  bot.on("error", (err) => {
    console.log("Error: ", err);
  });
}

createBot();
