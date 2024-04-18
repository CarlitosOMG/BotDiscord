//"say" command: repeats the given arguments
export const description = 'Repite los argumentos dados'
export async function run(message) {
 const args = message.content.split(' ').slice(1).join(' ')

 if (args.length < 1)
  return message.reply('Argumento invalido. Intenta nuevamente')

 message.reply(args)
}
