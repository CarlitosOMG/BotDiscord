import { Client, GatewayIntentBits } from 'discord.js'
import CONFIG from './config.js'

const client = new Client({ intents: [GatewayIntentBits.Guilds] }) //3276799

client.on('ready', () => {
 console.log(`Logged in as ${client.user.tag}!`)
})

client.on('interactionCreate', async (interaction) => {
 if (!interaction.isChatInputCommand()) return

 if (interaction.commandName === 'ping') {
  await interaction.reply('Pong!')
 }
})

client.login(CONFIG.TOKEN)
