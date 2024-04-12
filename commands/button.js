//"say" command: Send two buttons, one sends the username and the other its image
const { ActionRowBuilder } = require('discord.js')
const { ButtonBuilder } = require('discord.js')

const usernameButton = new ButtonBuilder()
 .setCustomId('username')
 .setEmoji('🥵')
 .setLabel('Mostrar nombre de usuario')
 .setStyle(1)

const avatarButton = new ButtonBuilder()
 .setCustomId('avatar')
 .setEmoji('🥵')
 .setLabel('Mostrar avatar de usuario')
 .setStyle(1)

module.exports = {
 description:
  'Envia dos botones, uno envia el nombre de usuario y el otro su imagen',
 run: async (message) => {
  const actionRow = new ActionRowBuilder().addComponents(
   usernameButton,
   avatarButton
  )
  const reply = await message.reply({
   components: [actionRow]
  })
  message.reply({ components: [actionRow] })

  //message collector
  const filter = (interaction) =>
   interaction.user.id === message.author.id &&
   interaction.message.id === reply.id
  const collector = message.channel.createMessageComponentCollector({
   filter,
   item: 60 * 1000 //1 minute duration in milliseconds
  })

  //when the collector is active
  collector.on('collector', async (interaction) => {
   if (interaction.customId === 'username') {
    interaction.update({
     content: `Tu nombre de usuario es **${message.author.displayName}**`,
     components: []
    })
   } else if (interaction.customId === 'avatar') {
    const avatar = member.user.displayAvatarURL({ size: 512 })
    interaction.update({
     content: `Tu imagen de perfil es`,
     files: [avatar],
     components: []
    })
   }
  })

  //when the collector ends at the minute
  collector.on('end', async () => {
   reply.edit({ components: [] }).catch(console.error)
  })
 }
}
