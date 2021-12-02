module.exports = async (bot,message,args,argsF) => {

    message.reply({
        embeds: [
            {
            title: `Pong! Ping: \`${bot.ws.ping}\`ms`,
            color: 0x0099ff,
            }
        ]
    });
    
};
module.exports.names = ["*ping", "*пинг"];
