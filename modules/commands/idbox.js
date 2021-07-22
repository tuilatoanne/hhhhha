const request = require('request');
const fs = require('fs')
module.exports.config = {
  name: "idbox",  
version: "1.0.0", 
hasPermssion: 0,
credits: "DarkNeed", 
description: "lấy thread ID nhóm", 
commandCategory: "system",
usages: "idbox", 
cooldowns: 1,
dependencies: ["request","fs"],
};

module.exports.run = async({
	api,
	event,
	args,
	client,
	Users,
	Threads,
	__GLOBAL,
	Currencies}) => {
	let threadInfo = await api.getThreadInfo(event.threadID);
    return api.sendMessage(`❤❤𝕋ℍℝ𝔼𝔸𝔻❤❤\n\n😎 𝔹𝕠𝕩ℕ𝕒𝕞𝕖: ${threadInfo.threadName}\n🌐 𝕌𝕀𝔻 𝔹𝕠𝕩: ${threadInfo.threadID}`, event.threadID, event.messageID);
}
 