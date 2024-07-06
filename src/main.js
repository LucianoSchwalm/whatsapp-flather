const { Client, LocalAuth } = require('whatsapp-web.js');
const qrcode = require('qrcode-terminal');

const wwebVersion = '2.2410.1';

const client = new Client({
    authStrategy: new LocalAuth(),
    // puppeteer: {
    //     headless: true,
    //     args: [ '--no-sandbox', '--disable-gpu', ],
    // },
    // webVersionCache: { type: 'remote', remotePath: `https://raw.githubusercontent.com/wppconnect-team/wa-version/main/html/${wwebVersion}.html`, }
});

client.on('ready', () => {
    console.log('Client is ready!');
});

client.on('qr', qr => {
    qrcode.generate(qr, {small: true});
});

// client.on('message_create', message => {
// 	if (message.body === '!ping') {
// 		// send back "pong" to the chat the message was sent in
// 		client.sendMessage(message.from, 'pong');
// 	}
// });

client.on('message_create',async message => {
    if(message.body === '!first_test')
        client.sendMessage(message.from, `Olá, ${(await message.getContact()).pushname}. Bem vinda à flather, somos o maior atacado de roupas da região metropolitana, caso queira saber mais sobre nossa loja, por favor insira seu CPNJ.`)
})

client.initialize();
