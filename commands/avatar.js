//"Avatar" command: Send the avatar of a mentioned user or, failing that, ours
const { EmbedBuilder } = require('discord.js')
//const { User } = require('discord.js')

module.exports = {
 description:
  'Envia el avatar de un usuario mencionado o en su defecto el nuestro',
 run: async (message) => {
  const target = message.mentions.users.first() || message.author
  const member = await message.guild.members.fetch(target.id)

  if (!member) return message.reply('Ingresa un usuario valido o existente')

  const avatar = member.user.displayAvatarURL({ size: 512 })

  const embed = new EmbedBuilder()
   .setColor('Blurple')
   .setTitle(`🥵 Avatar de <@${member.user.displayName}>`)
   .setImage(avatar)

  message.reply({ embeds: [embed] })
 }
}
