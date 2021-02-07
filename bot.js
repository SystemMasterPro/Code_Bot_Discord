const { Client, MessageAttachment } = require('discord.js');
const client = new Client();

// levantamos el servidor
client.on('ready', () => {
  console.log(`Estamos en el servidor ${client.user.tag}!`);
});

// Le metemos codigo a nuestro Bot 
client.on('message', msg => {
 
    if (msg.content === 'hola') {
        msg.channel.send(`Hola ${msg.author}`);
    }

    if (msg.content.includes('!quieneres')) {
        msg.channel.send('SOY EL MEJOR PUTO BOT DE LA HISTORIA');
    }

    if (msg.content === '!redes') {
        msg.channel.send('https://www.youtube.com/channel/UCvHWv1YfSPOwAyW2c3UQvJw');
        msg.channel.send('https://twitter.com/Richard6_10');
        msg.channel.send('https://github.com/SystemMasterPro');
    }

    if (msg.content === '!info') {
    // Create the attachment using MessageAttachment
    const attachment = new MessageAttachment('https://pbs.twimg.com/profile_images/1318269438840479744/ry2bonrw_400x400.jpg');
    // Send the attachment in the message channel
    msg.channel.send(attachment);
    }

    // Deleting 100 messages
    if (msg.content === '!limpiar') {
        async function clear() {
            try {
                // await msg.delete();
                const fetched = await msg.channel.messages.fetch({limit: 5});
                msg.channel.bulkDelete(fetched);;
                console.log('Mensajes eliminados con exito');
            }
            catch (e) {
                console.log(e);
            }
        }
        clear();
    }
});

client.login('ODAxMTY5MzUyODE2NzIxOTYw.YAcxGg.W6hjf2v56jqnqTCYXDrX_d0l86k');