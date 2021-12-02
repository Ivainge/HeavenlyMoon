module.exports = async (bot) => {
    console.log("Ready");
    

    bot.user.setPresence({ activities: [{ name: 'by CringeTeam', type:"PLAYING"}], status: 'IDLE' });
};