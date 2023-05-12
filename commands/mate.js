const { SlashCommandBuilder } = require("discord.js");

module.exports = {
  cmd: new SlashCommandBuilder()
    .setName("mate")
    .setDescription(
      "Crée une demande pour trouver un mate en fonction du jeu et du rank."
    )
    .addRoleOption((option) =>
      option
        .setName("jeu")
        .setDescription("Le jeu sur le quel vous voulez jouer.")
        .setRequired(true)
    )
    .addRoleOption((option) =>
      option
        .setName("rank")
        .setDescription("Le rank du joueur")
        .setRequired(true)
    ),
  async execute(interaction) {
    const game = interaction.options.getRole("jeu");
    const rank = interaction.options.getRole("rank");
    const user = interaction.member;
    if (!game) {
      interaction.reply({
        content: "Veuillez entrer un jeu pour votre demande.",
        ephemeral: true,
      });
      return;
    }
    if (!rank) {
      interaction.reply({
        content: "Veuillez entrer un rank pour votre demande.",
        ephemeral: true,
      });
      return;
    }
    await interaction.reply(`${game} ${user} a besoin de toi pour jouer en ${rank} !`);
  },
};
