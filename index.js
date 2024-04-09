//const Discord = require('discord.js')
import { Client, Events } from 'discord.js'
const client = new Client({ intents: 3276799 })
import TOKEN from './config.js'

client.on(Events.ClientReady, async () => {
 console.log(`Bot ${client.user.tag} is ONLINE`)
})

client.login(TOKEN)
