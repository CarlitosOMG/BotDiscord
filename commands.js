import { REST, Routes } from 'discord.js'
import CONFIG from './config.js'

const commands = [
 {
  name: 'ping',
  description: 'Replies with Pong!'
 }
]

const rest = new REST({ version: '10' }).setToken(CONFIG.TOKEN)

try {
 console.log('Started refreshing application (/) commands.')

 await rest.put(Routes.applicationCommands(CONFIG.CLIENT_ID), {
  body: commands
 })

 console.log('Successfully reloaded application (/) commands.')
} catch (error) {
 console.error(error)
}
