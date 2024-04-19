import { REST, Routes } from 'discord.js'
import CONFIG from './config.js'

const commands = [
 {
  name: 'ping',
  description: 'Responde con Pong'
 },
 {
  name: 'say',
  description: 'Repite los argumentos dados',
  options: [
   {
    name: 'texto',
    description: 'El texto que se repetirá',
    type: 3,
    required: true
   }
  ]
 },
 {
  name: 'avatar',
  description: 'Muestra el avatar del usuario seleccionado',
  options: [
   {
    name: 'usuario',
    description: 'Selecciona un usuario',
    type: 9,
    required: true
   }
  ]
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
