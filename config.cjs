const config = {
    // ... (vos paramètres existants)
    TAUNTS: [
        "T'es sûr que t'as bien branché ton cerveau ? 🧠⚡",
        "Mon bot a plus de répartie que toi 🤖",
        "404 - Réponse intelligente introuvable",
        "Wow... c'est tout ? 😴"
    ],
    TAUNT_PROBABILITY: 0.3 // 30% de chance de répondre
}// config.js
const fs = require("fs");
require("dotenv").config();
const trollPhrases = [
  "Ah oui, la luminosité de ton intelligence est... éteinte. 💡🚫",
  "Si la connerie était une crypto, tu serais le Bitcoin. 📉",
  "Je t'envoie une carte postale du Sahara... oh wait, t'es déjà sec. 🏜️",
  "Ton QI est comme une liste Python : ['bas', 'très bas', '...']. 🐍",
  "Même Siri a refusé de répondre à ça. 🍎🤖",
  "T'es sûr que t'as pas oublié ton cerveau chez moi ? 🧠🚪",
  "Attends, je cherche une réponse à ta hauteur... *chargeur 1%* 🔋",
  "J'ai 99 problèmes, mais toi t'en es 127. 💯",
  "Ton existence me donne des idées... de sieste. 😴",
  "Wow. Tellement vide que ça mérite un '404 Personality Not Found'. ❌"
];

// Réponse aléatoire avec mention
if (body.startsWith('!troll')) {
  const randomTroll = trollPhrases[Math.floor(Math.random() * trollPhrases.length)];
  await sock.sendMessage(
    m.chat,
    { 
      text: `@${m.sender.split('@')[0]} ${randomTroll}`,
      mentions: [m.sender]
    },
    { quoted: m }
  );
}

const config = {
  SESSION_ID: process.env.SESSION_ID || "nector~lxZTXDCR#lZ_z55ylRk81YIvgUwF4S3Z56aLmT-FE_vPZDpeKFUc",
  PREFIX: process.env.PREFIX || '*',
  AUTO_STATUS_SEEN: process.env.AUTO_STATUS_SEEN !== undefined ? process.env.AUTO_STATUS_SEEN === 'true' : true, 
  AUTO_STATUS_REPLY: process.env.AUTO_STATUS_REPLY !== undefined ? process.env.AUTO_STATUS_REPLY === 'true' : true,
  STATUS_READ_MSG: process.env.STATUS_READ_MSG || '',
  AUTO_DL: process.env.AUTO_DL !== undefined ? process.env.AUTO_DL === 'true' : false,
  AUTO_READ: process.env.AUTO_READ !== undefined ? process.env.AUTO_READ === 'true' : false,
  AUTO_TYPING: process.env.AUTO_TYPING !== undefined ? process.env.AUTO_TYPING === 'true' : false,
  AUTO_RECORDING: process.env.AUTO_RECORDING !== undefined ? process.env.AUTO_RECORDING === 'true' : false,
  ALWAYS_ONLINE: process.env.ALWAYS_ONLINE !== undefined ? process.env.ALWAYS_ONLINE === 'true' : false,
  AUTO_REACT: process.env.AUTO_REACT !== undefined ? process.env.AUTO_REACT === 'true' : false,
   /*auto block only for 212 */
  AUTO_BLOCK: process.env.AUTO_BLOCK !== undefined ? process.env.AUTO_BLOCK === 'true' : true,
  
  
  REJECT_CALL: process.env.REJECT_CALL !== undefined ? process.env.REJECT_CALL === 'true' : false, 
  NOT_ALLOW: process.env.NOT_ALLOW !== undefined ? process.env.NOT_ALLOW === 'true' : true,
  MODE: process.env.MODE || "public",
  BOT_NAME: process.env.BOT_NAME || "DRAPTER-XMD",
  MENU_IMAGE: process.env.MENU_IMAGE || "https://files.catbox.moe/mw30hn.jpg",
  DESCRIPTION: process.env.DESCRIPTION || "© ᴘᴏᴡᴇʀᴇᴅ ʙʏ ⓃⒺCⓉOR🍯",
  OWNER_NAME: process.env.OWNER_NAME || "ⓃⒺCⓉOR🍯",
  OWNER_NUMBER: process.env.OWNER_NUMBER || "254725474072",
  GEMINI_KEY: process.env.GEMINI_KEY || "AIzaSyCUPaxfIdZawsKZKqCqJcC-GWiQPCXKTDc",
  WELCOME: process.env.WELCOME !== undefined ? process.env.WELCOME === 'true' : false, 
};


module.exports = config;
