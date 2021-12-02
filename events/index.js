module.exports = (bot) => {
    bot
    .on('ready', ()=>require('./ready')(bot))
    .on('messageCreate', (message) => require('./message')(bot, message))
    .on('interactionCreate', (interaction) => require('./interactionCreate')(bot,interaction));

};