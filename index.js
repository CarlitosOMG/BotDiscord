const { Client, Events } = require('discord.js')
const client = new Client({ intents: 3276799 })
const TOKEN = require('./config.js')

client.on(Events.ClientReady, async () => {
 console.log(`Bot ${client.user.tag} is ONLINE`)
})

//responses to messages
client.on(Events.MessageCreate, async (message) => {
 if (message.author.bot) return //If the author of the message is the bot, it does not activate the commands
 if (!message.content.startsWith('-')) return //If the commands do not begin with the established character, they will not be taken into account.

 const args = message.content.slice(1).split(' ')[0] //Message content -1 character
 //Text command handler
 try {
  const command = require(`./commands/${args}`)
  command.run(message)
 } catch (error) {
  console.log(
   `Oh vaya, al parecer ah ocurrido un error al usar el comando -${args}`,
   error.message
  )
 }
})

client.login(TOKEN)
