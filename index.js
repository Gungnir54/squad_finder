const fs = require("fs");
const { TOKEN } = require("./config.json");
const { Collection, Events } = require("discord.js");
const Discord = require("discord.js");

const bot = new Discord.Client({ intents: 3276799 });
bot.commands = new Collection();
bot.commandsArray = [];

const functionFolder = fs
  .readdirSync(`./functions`)
  .filter((file) => file.endsWith(".js"));
for (const file of functionFolder) {
  require(`./functions/${file}`)(bot);
}

bot.login(TOKEN);
bot.handleCommands();

bot.on(Events.InteractionCreate, (interaction) => {
  console.log("Interaction reçue ! En cours de traitement ...\n");
  console.log("La commande " + interaction.commandName + "vient d'etre appelée\n");
  const command = bot.commands.get(interaction.commandName);
  if (!command) return;
  command.execute(interaction);
  console.log("La commande " + interaction.commandName + " a été executée avec succès !\n");
});

bot.on("ready", async () => {
  console.log(`Connecté avec ${bot.user.tag}!`);
  bot.user.setActivity("Trouver des mates");
});
