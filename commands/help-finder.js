const { SlashCommandBuilder } = require("discord.js");

module.exports = {
  cmd: new SlashCommandBuilder()
    .setName("help-finder")
    .setDescription("Affiche comment se servir de la commande /mate"),
  async execute(interaction) {
    const embed = {
      color: 0xFFD700,
      title: "Comment se servir de la commande /mate",
      description:
        "Pour se servir de la commande /mate, il faut entrer le jeu sur lequel vous voulez jouer et votre rank.",
      fields: [
        {
          name: "Exemple",
          value: "/mate @League of Legends @Gold",
        },
      ],
      timestamp: new Date(),
      footer: {
        text: "Squad Finder",
      },
    };
    await interaction.reply({ embeds: [embed] });
  },
};
