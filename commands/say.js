//"say" command: repeats the given arguments
module.exports = {
 description: 'Repite los argumentos dados',
 run: async (message) => {
  const args = message.content.split(' ').slice(1).join(' ')

  if (args.length < 1)
   return message.reply('Argumento invalido. Intenta nuevamente')

  message.reply(args)
 }
}
