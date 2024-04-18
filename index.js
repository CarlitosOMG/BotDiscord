import { Client } from 'discord.js'
import CONFIG from './config.js'
import * as commands from './commands/commandsAdmin.js'

const client = new Client({ intents: 3276799 }) //3276799

client.on('ready', () => {
 console.log(`Logged in as ${client.user.tag}!`)
})

client.on('interactionCreate', async (interaction) => {
 if (!interaction.isCommand()) return

 const commandName = interaction.commandName
 const command = commands[commandName]

 if (!command) return // Command not found

 try {
  await command.run(interaction)
 } catch (error) {
  console.error(`Error executing command ${commandName}:`, error)
  await interaction.reply('There was an error while executing this command.')
 }
})

client.on('guildMemberAdd', async (member) => {
 const welcomeChannelId = '1230004037244551238'
 const channel = await client.channels.fetch(welcomeChannelId)
 channel.send(`**<@${member.user.id}> Bien Venido al servidor!**🥵`)
})

client.on('guildMemberRemove', async (member) => {
 const welcomeChannelId = '1230004037244551238'
 const channel = await client.channels.fetch(welcomeChannelId)
 channel.send(`**<@${member.user.id}> Ah abandonado el barco!**😭`)
})

client.login(CONFIG.TOKEN)
