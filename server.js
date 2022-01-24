let Discord = require("discord.js");
let client = new Discord.Client();
const delay = (n) => new Promise((r) => setTimeout(r, n * 1000));
var x = 0;

//Hi! The creator of this useless bot can be contacted or followed at https://tinyurl.com/ArticFox1SC The bot may go down due to not
//having a server. If you want to help you can leave this tab open, which will keep this awake. Thanks!
//Artic_Fox1
//Jolt727
//J727S
//J727

client.on("message", (message) => {
  if (message.content === "dsadsad") {
    if (x === 0) {
      message.channel.send("Starting");
    }
    let i = 0;
    do {
      i += 1;
      x += 1;

      message.channel.send(x);
    } while (2 === 1);
    {
    }
  }
});

var authtokenid = process.env.authtoken;
client.login(authtokenid);
