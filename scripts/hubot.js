module.exports = function(bot) {

    bot.hear(/hello bot/, function(res) {
        return res.send("Shall we play a game?");
    });

    bot.hear(/yes/, function(res) {
        return res.send("How old are you?");
    });

    bot.respond(/I am (.*)/i, function(msg) {
       var age;
       age = msg.match[1];
       var secondsPerMin = 60;
       var minutesPerHour = 60;
       var hoursPerDay = 24;
       var daysPerWeek = 7;
       var weeksPerYear = 52;
       var secondsPerDay = secondsPerMin * minutesPerHour * hoursPerDay;
       var secondsAlive = secondsPerDay * age;
       return msg.reply("You look great for, " + age + " considering that is " + secondsAlive + "seconds!");
    });

    bot.send(secondsAlive + " old makes you young enough to have a little fun. Ask me to tell you a joke! When you have to get back the real worl, make sure you say goodbye!");

    bot.hear(/tell me a joke/, function(res) {
        jokeArray = [
            "A programmer is a person who fixed a problem that you don’t know you have, in a way you don’t understand.",
            "My code doesn’t always work, but when it does I don’t know why.",
            "The only people up at 3am are either in love, lonely, drunk or programmer.",
            "Computer language design is just like a stroll in the park. Jurassic Park, that is."
        ];
        return res.random(jokeArray);
    });

    bot.hear(/goodbye/, function(res) {
        return res.send("Don't forget" + secondsAlive + "is only a number! You're going to own the day!");
    });

};
