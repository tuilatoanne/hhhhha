const request = require('request');
const fs = require('fs')
module.exports.config = {
  name: "idbox",  
version: "1.0.0", 
hasPermssion: 0,
credits: "DarkNeed", 
description: "lαΊ₯y thread ID nhΓ³m", 
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
    return api.sendMessage(`β€β€πββπΌπΈπ»β€β€\n\nπ πΉπ π©βπππ: ${threadInfo.threadName}\nπ πππ» πΉπ π©: ${threadInfo.threadID}`, event.threadID, event.messageID);
}
 