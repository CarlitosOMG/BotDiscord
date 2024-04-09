//const Discord = require('discord.js')
const { Client, Events } = require('discord.js')
const client = new Client({ intents: 3276799 })
const TOKEN = require('./config')

client.on(Events.ClientReady, async () => {
 console.log(`Bot ${client.user.tag} is ONLINE`)
})

client.login(TOKEN)
