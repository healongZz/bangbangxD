exports.run = (client, message, Discord, prefix) => {

message.delete();

if(message.author.id !== "356510829920780289") return;

//let webText = "www.tamotoji.tk";
const embed = new Discord.RichEmbed()
.setFooter("Hosting : github.com | TAMOTOJI")
.setAuthor("Website : TAMOTOJI", message.author.avatarURL)
.setDescription("Discord : `TAMOTOJI's HangOut Server`\nDiscord Cambodia Community!🎉\n\n__**TAMOYOJI's  HangOut Server**__ Includes a Very Hug And Diverse Community , Free Game And Custom BOT And More!\n\n🔗 www.tamotoji.tk [CLICK TO VIEW](tamotoji.tk)\n");

//message.channel.send(webText);
message.channel.send(embed);


}
