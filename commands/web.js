exports.run = (client, message, Discord, prefix) => {

message.delete();

if(message.author.id !== "356510829920780289") return;

let webText = "www.tamotoji.tk";
const embed = new Discord.RichEmbed()
.setTitle("tamotoji.tk")
.setDescription("Discord : `TAMOTOJI's HangOut Server`\n\nDiscord Community Cambodia !🎉");

message.channel.send(webText);
message.channel.send(embed);


}
