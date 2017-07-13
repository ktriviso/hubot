module.exports = function(bot) {
    bot.hear(/test/, function(res) {
        return res.send("Robot is running!");
    });

};
