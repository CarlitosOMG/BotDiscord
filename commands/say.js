//"say" command: repeats the given arguments
export async function run(interaction) {
 const args = interaction.options.getString('texto')

 if (!args) {
  return interaction.reply('Argumento inválido. Inténtalo de nuevo.')
 }

 await interaction.reply(args)
}
