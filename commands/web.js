exports.run = (client, message, Discord, prefix) => {

message.delete();

if(message.author.id !== "356510829920780289") return;

//let webText = "www.tamotoji.tk";
const embed = new Discord.RichEmbed()
.setTitle("www.tamotoji.tk")
.setFooter("Hosting : github.com | TAMOTOJI", "https://cdn.discordapp.com/attachments/460329537805484032/462163125056307200/GitHub-Mark.png")
.setAuthor("Website : TAMOTOJI", message.author.avatarURL)
.setDescription("Discord : `TAMOTOJI's HangOut Server`\nDiscord Cambodia Community!🎉\n\n__**TAMOYOJI's  HangOut Server**__ Includes a Very Hug And Diverse Community , Free Game And Custom BOT And More!\n[tamotoji.t](http://bit.ly/2IygbyV)");
//.addField("Web Link :", "[CLICK HERE](
//message.channel.send(webText);
message.channel.send(embed);


}
