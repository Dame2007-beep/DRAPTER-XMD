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
