const Discord = require('discord.js');
const client = new Discord.Client();
const token = 'NzExNDI1MzE1ODYzMjY1MzMw.XsjHtg.AKZjanEYQRrs6cSKnJuw9LbsfdQ';
const welcomeChannelName = "👋입장👋";
const byeChannelName = "👋입장👋";
const welcomeChannelComment = "어서오세요.";
const byeChannelComment = "안녕히가세요.";

client.on('ready', () => {
  console.log('켜졌습니다');
});

client.on("guildMemberAdd", (member) => {
  const guild = member.guild;
  const newUser = member.user;
  const welcomeChannel = guild.channels.find(channel => channel.name == welcomeChannelName);

  welcomeChannel.send(`<@${newUser.id}> ${welcomeChannelComment}\n`);

  member.addRole(guild.roles.find(role => role.name == "시청자"));
});

client.on("guildMemberRemove", (member) => {
  const guild = member.guild;
  const deleteUser = member.user;
  const byeChannel = guild.channels.find(channel => channel.name == byeChannelName);

  byeChannel.send(`<@${deleteUser.id}> ${byeChannelComment}\n`);
});

client.on('message', (message) => {
  if(message.author.bot) return;

  if(message.content === '상태') {
    message.reply('현재 저의상태는 최고네요!');
  }
});

client.login(token);
