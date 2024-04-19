//"Avatar" command: Send the avatar of a mentioned user or, failing that, ours
import { EmbedBuilder } from 'discord.js'

export async function run(message) {
 const user = message.options.getUser('usuario')

 if (!user) {
  return message.reply('Argumento inválido. Inténtalo de nuevo.')
 }

 const avatar = user.displayAvatarURL({ size: 512 })
 const userMention = user.username

 const embed = new EmbedBuilder()
  .setColor('Blurple')
  .setTitle(`🥵 Avatar de ${userMention}`)
  .setImage(avatar)

 await message.reply({ embeds: [embed] })
}
