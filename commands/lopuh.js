module.exports = async (bot,message,args,argsF) => {

    message.reply({
        repliedUser: false,
        embeds: [
            {
            title: "Пошёл нахуй",
            color: 0x0099ff,
            image: {
                url: 'https://media.discordapp.net/attachments/901817436045733978/901918498362626079/Z.png',
                },
            }
        ]
        
    });
    
};
module.exports.names = ["черпачок", "лопух"];
