```javascript
const { Client, LocalAuth } = require('whatsapp-web.js');
const qrcode = require('qrcode-terminal');
const fs = require('fs');

const client = new Client({
  authStrategy: new LocalAuth()
});

client.on('qr', qr => {
  qrcode.generate(qr, { small: true });
});

client.on('ready', () => {
  console.log('Asake MD est connecté à WhatsApp !');
});

client.on('group_join', async notification => {
  const chat = await notification.getChat();
  const contact = await notification.getContact();
  chat.sendMessage(`Bienvenue @contact.id.user 👋`,  mentions: [contact] );
);

client.on('message', async message => 
  const chat = await message.getChat();

  if (message.body.toLowerCase().includes('bonjour')) 
    message.reply('Salut 👋');
  

  if (message.body === '.menu') 
    message.reply(`*Menu des commandes :*!tagall!promote [num]!demote [num].download [url].stickers.time.info.plan`);
  

  if (message.body === '.time') 
    const now = new Date();
