exports.run = (client, message, Discord, prefix) => {

   if(message.author.id !== "356510829920780289") return;
   message.delete();
   message.channel.send(args.join(" "));


}
