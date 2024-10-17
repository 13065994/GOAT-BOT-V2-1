module.exports.config = {
  name: "autotime",
  version: "2.0",
  role: 0,
  author: "Dipto",
  description: "সেট করা সময় অনুযায়ী স্বয়ংক্রিয়ভাবে বার্তাগুলি পাঠানো হবে!",
  category: "AutoTime",
  countDown: 3,
};

module.exports.onLoad = async ({ api }) => {
  const timerData = {
      "12:00:00 PM": {
        message: "=== 「𝗖𝗹𝗼𝗰𝗸」  ===\n  --❖-- 𝐁𝐀𝐘𝐉𝐈𝐃(✷‿✷) --❖--\n✢━━━━━━━━━━━━━━━✢\n\n𝗧𝗶𝗺𝗲 : 「12:00 𝗣𝗠」\n\n✢━━━━━━━━━━━━━━━✢\n𝐅𝐛 𝐥𝐢𝐧𝐤:https://www.facebook.com/100065506668822?mibextid=ZbWKwL \n𝐂𝐫𝐞𝐚𝐭𝐨𝐫 : 𝐁𝐀𝐘𝐉𝐉𝐃� (✷‿✷)",
        url: null
      },
      "01:00:00 AM": {
        message: "=== 「𝗖𝗹𝗼𝗰𝗸」  ===\n  --❖-- 𝐁𝐀𝐘𝐉𝐉𝐃(✷‿✷) --❖--\n✢━━━━━━━━━━━━━━━✢\n\n𝗧𝗶𝗺𝗲 :「01:00 𝗔𝗠」 \n\n✢━━━━━━━━━━━━━━━✢\n𝐅𝐛 𝐥𝐢𝐧𝐤:https://www.facebook.com/100065506668822?mibextid=ZbWKwL\n𝐂𝐫𝐞𝐚𝐭𝐨𝐫 : 𝐁𝐀𝐘𝐉𝐈𝐃 (✷‿✷)",
        url: null
      },
      "02:00:00 AM": {
        message: "=== 「𝗖𝗹𝗼𝗰𝗸」  ===\n  --❖-- 𝐁𝐀𝐘𝐉𝐈𝐃(✷‿✷) --❖--\n✢━━━━━━━━━━━━━━━✢\n\n𝗧𝗶𝗺𝗲 : 「02:00 𝗔𝗠」 \n\n✢━━━━━━━━━━━━━━━✢\n𝐅𝐛 𝐥𝐢𝐧𝐤:https://www.facebook.com/100065506668822?mibextid=ZbWKwL\n𝐂𝐫𝐞𝐚𝐭𝐨𝐫 : 𝐁𝐀𝐘𝐉𝐈𝐃 (✷‿✷)",
        url: null
      },
      "03:00:00 AM": {
        message: "=== 「𝗖𝗹𝗼𝗰𝗸」  ===\n  --❖-- 𝐁𝐀𝐘𝐉𝐈𝐃(✷‿✷) --❖--\n✢━━━━━━━━━━━━━━━✢\n\n𝗧𝗶𝗺𝗲 : 「03:00 𝗔𝗠」 \n\n✢━━━━━━━━━━━━━━━✢\n𝐅𝐛 𝐥𝐢𝐧𝐤:https://www.facebook.com/100065506668822?mibextid=ZbWKwL\n𝐂𝐫𝐞𝐚𝐭𝐨𝐫 : 𝐁𝐀𝐘𝐉𝐈𝐃(✷‿✷)",
        url: null
      },
      "04:00:00 AM": {
        message: "=== 「𝗖𝗹𝗼𝗰𝗸」  ===\n  --❖-- 𝐁𝐀𝐘𝐉𝐈𝐃(✷‿✷) --❖--\n✢━━━━━━━━━━━━━━━✢\n\n𝗧𝗶𝗺𝗲 : 「04:00 𝗔𝗠」 \n\n✢━━━━━━━━━━━━━━━✢\n𝐅𝐛 𝐥𝐢𝐧𝐤:https://www.facebook.com/100065506668822?mibextid=ZbWKwL\n𝐂𝐫𝐞𝐚𝐭𝐨𝐫 : 𝐁𝐀𝐘𝐉𝐈𝐃(✷‿✷)",
        url: null
      },
      "05:00:00 AM": {
        message: "=== 「𝗖𝗹𝗼𝗰𝗸」  ===\n  --❖-- 𝐁𝐀𝐘𝐉𝐈𝐃(✷‿✷) --❖--\n✢━━━━━━━━━━━━━━━✢\n\n𝗧𝗶𝗺𝗲 : 「05:00 𝗔𝗠」 \n\n✢━━━━━━━━━━━━━━━✢\n𝐅𝐛 𝐥𝐢𝐧𝐤:https://www.facebook.com/100065506668822?mibextid=ZbWKwL\n𝐂𝐫𝐞𝐚𝐭𝐨𝐫 : 𝐁𝐀𝐘𝐉𝐈𝐃 (✷‿✷)",
        url: null
      },
      "06:00:00 AM": {
        message: "=== 「𝗖𝗹𝗼𝗰𝗸」  ===\n  --❖-- 𝐁𝐀𝐘𝐉𝐈𝐃(✷‿✷) --❖--\n✢━━━━━━━━━━━━━━━✢\n\n𝗧𝗶𝗺𝗲 : 「06:00 𝗔𝗠」 \n\n✢━━━━━━━━━━━━━━━✢\n𝐅𝐛 𝐥𝐢𝐧𝐤:https://www.facebook.com/100065506668822?mibextid=ZbWKwL\n𝐂𝐫𝐞𝐚𝐭𝐨𝐫 : 𝐁𝐀𝐘𝐉𝐈𝐃 (✷‿✷)",
        url: null
      },
      "07:00:00 AM": {
        message: "=== 「𝗖𝗹𝗼𝗰𝗸」  ===\n  --❖-- 𝐁𝐀𝐘𝐉𝐈𝐃(✷‿✷) --❖--\n✢━━━━━━━━━━━━━━━✢\n\n𝗧𝗶𝗺𝗲 : 「07:00 𝗔𝗠」 \n\n✢━━━━━━━━━━━━━━━✢\n𝐅𝐛 𝐥𝐢𝐧𝐤:https://www.facebook.com/100065506668822?mibextid=ZbWKwL\n𝐂𝐫𝐞𝐚𝐭𝐨𝐫 : 𝐁𝐀𝐘𝐉𝐈𝐃 (✷‿✷)",
        url: null
      },
      "08:00:00 AM": {
        message: "=== 「𝗖𝗹𝗼𝗰𝗸」  ===\n  --❖-- 𝐁𝐀𝐘𝐉𝐈𝐃(✷‿✷) --❖--\n✢━━━━━━━━━━━━━━━✢\n\n𝗧𝗶𝗺𝗲 :  「08:00 𝗔𝗠」\n\n✢━━━━━━━━━━━━━━━✢\n𝐅𝐛 𝐥𝐢𝐧𝐤:https://www.facebook.com/100065506668822?mibextid=ZbWKwL\n𝐂𝐫𝐞𝐚𝐭𝐨𝐫 : 𝐁𝐀𝐘𝐉𝐈𝐃 (✷‿✷)",
        url: null
      },
      "09:00:00 AM": {
        message: "=== 「𝗖𝗹𝗼𝗰𝗸」  ===\n  --❖-- 𝐁𝐀𝐘𝐉𝐈𝐃(✷‿✷) --❖--\n✢━━━━━━━━━━━━━━━✢\n\n𝗧𝗶𝗺𝗲 :  「09:00 𝗔𝗠」\n\n✢━━━━━━━━━━━━━━━✢\n𝐅𝐛 𝐥𝐢𝐧𝐤:https://www.facebook.com/100065506668822?mibextid=ZbWKwL\n𝐂𝐫𝐞𝐚𝐭𝐨𝐫 : 𝐁𝐀𝐘𝐉𝐈𝐃 (✷‿✷)",
        url: null
      },
      "10:00:00 AM": {
        message: "=== 「𝗖𝗹𝗼𝗰𝗸」  ===\n  --❖-- 𝐁𝐀𝐘𝐉𝐈𝐃(✷‿✷) --❖--\n✢━━━━━━━━━━━━━━━✢\n\n𝗧𝗶𝗺𝗲 : 「10:00 𝗔𝗠」 \n\n✢━━━━━━━━━━━━━━━✢\n𝐅𝐛 𝐥𝐢𝐧𝐤:https://www.facebook.com/100065506668822?mibextid=ZbWKwL\n𝐂𝐫𝐞𝐚𝐭𝐨𝐫 : 𝐁𝐀𝐘𝐉𝐈𝐃 (✷‿✷)",
        url: null
      },
      "11:00:00 AM": {
        message: "=== 「𝗖𝗹𝗼𝗰𝗸」  ===\n  --❖-- 𝐁𝐀𝐘𝐉𝐈𝐃(✷‿✷) --❖--\n✢━━━━━━━━━━━━━━━✢\n\n𝗧𝗶𝗺𝗲 :  「11:00 𝗔𝗠」\n\n✢━━━━━━━━━━━━━━━✢\n𝐅𝐛 𝐥𝐢𝐧𝐤:https://www.facebook.com/100065506668822?mibextid=ZbWKwL\n𝐂𝐫𝐞𝐚𝐭𝐨𝐫 : 𝐁𝐀𝐘𝐉𝐈𝐃 (✷‿✷)",
        url: null
      },
      "12:00:00 PM": {
        message: "=== 「𝗖𝗹𝗼𝗰𝗸」  ===\n  --❖-- 𝐁𝐀𝐘𝐉𝐈𝐃(✷‿✷) --❖--\n✢━━━━━━━━━━━━━━━✢\n\n𝗧𝗶𝗺𝗲 :「12:00 𝗣𝗠」 \n\n✢━━━━━━━━━━━━━━━✢\n𝐅𝐛 𝐥𝐢𝐧𝐤:https://www.facebook.com/100065506668822?mibextid=ZbWKwL\n𝐂𝐫𝐞𝐚𝐭𝐨𝐫 : 𝐁𝐀𝐘𝐉𝐈𝐃 (✷‿✷)",
        url: null
      },
      "01:00:00 PM": {
        message: "=== 「𝗖𝗹𝗼𝗰𝗸」  ===\n  --❖-- 𝐁𝐀𝐘𝐉𝐈𝐃(✷‿✷) --❖--\n✢━━━━━━━━━━━━━━━✢\n\n𝗧𝗶𝗺𝗲 :  「01:00 𝗣𝗠」\n\n✢━━━━━━━━━━━━━━━✢\n𝐅𝐛 𝐥𝐢𝐧𝐤:https://www.facebook.com/100065506668822?mibextid=ZbWKwL\n𝐂𝐫𝐞𝐚𝐭𝐨𝐫 : 𝐁𝐀𝐘𝐉𝐈𝐃 (✷‿✷)",
        url: null
      },
      "02:00:00 PM": {
        message: "=== 「𝗖𝗹𝗼𝗰𝗸」  ===\n  --❖-- 𝐁𝐀𝐘𝐉𝐈𝐃(✷‿✷) --❖--\n✢━━━━━━━━━━━━━━━✢\n\n𝗧𝗶𝗺𝗲 :  「02:00 𝗣𝗠」\n\n✢━━━━━━━━━━━━━━━✢\n𝐅𝐛 𝐥𝐢𝐧𝐤:https://www.facebook.com/100065506668822?mibextid=ZbWKwL\n𝐂𝐫𝐞𝐚𝐭𝐨𝐫 : 𝐁𝐀𝐘𝐉𝐈𝐃(✷‿✷)",
        url: null
      },
      "03:00:00 PM": {
        message: "=== 「𝗖𝗹𝗼𝗰𝗸」  ===\n  --❖-- 𝐁𝐀𝐘𝐉𝐈𝐃(✷‿✷) --❖--\n✢━━━━━━━━━━━━━━━✢\n\n𝗧𝗶𝗺𝗲 : 「03:00 𝗣𝗠」 \n\n✢━━━━━━━━━━━━━━━✢\n𝐅𝐛 𝐥𝐢𝐧𝐤:https://www.facebook.com/100065506668822?mibextid=ZbWKwL\n𝐂𝐫𝐞𝐚𝐭𝐨𝐫 : 𝐁𝐀𝐘𝐉𝐈𝐃(✷‿✷)",
        url: null
      },
      "04:00:00 PM": {
        message: "=== 「𝗖𝗹𝗼𝗰𝗸」  ===\n  --❖-- 𝐁𝐀𝐘𝐉𝐈𝐃(✷‿✷) --❖--\n✢━━━━━━━━━━━━━━━✢\n\n𝗧𝗶𝗺𝗲 :  「04:00 𝗣𝗠」\n\n✢━━━━━━━━━━━━━━━✢\n𝐅𝐛 𝐥𝐢𝐧𝐤:https://www.facebook.com/100065506668822?mibextid=ZbWKwL\n𝐂𝐫𝐞𝐚𝐭𝐨𝐫 : 𝐁𝐀𝐘𝐉𝐈𝐃(✷‿✷)",
        url: null
      },
      "05:00:00 PM": {
        message: "=== 「𝗖𝗹𝗼𝗰𝗸」  ===\n  --❖-- 𝐁𝐀𝐘𝐉𝐈𝐃(✷‿✷) --❖--\n✢━━━━━━━━━━━━━━━✢\n\n𝗧𝗶𝗺𝗲 : 「05:00 𝗣𝗠」 \n\n✢━━━━━━━━━━━━━━━✢\n𝐅𝐛 𝐥𝐢𝐧𝐤:https://www.facebook.com/100065506668822?mibextid=ZbWKwL\n𝐂𝐫𝐞𝐚𝐭𝐨𝐫 : 𝐁𝐀𝐘𝐉𝐈𝐃 (✷‿✷)",
        url: null
      },
      "06:00:00 PM": {
        message: "=== 「𝗖𝗹𝗼𝗰𝗸」  ===\n  --❖-- 𝐁𝐀𝐘𝐉𝐈𝐃(✷‿✷) --❖--\n✢━━━━━━━━━━━━━━━✢\n\n𝗧𝗶𝗺𝗲 :  「06:00 𝗣𝗠」\n\n✢━━━━━━━━━━━━━━━✢\n𝐅𝐛 𝐥𝐢𝐧𝐤:https://www.facebook.com/100065506668822?mibextid=ZbWKwL\n𝐂𝐫𝐞𝐚𝐭𝐨𝐫 : 𝐁𝐀𝐘𝐉𝐈𝐃 (✷‿✷)",
        url: null
      },
      "07:00:00 PM": {
        message: "=== 「𝗖𝗹𝗼𝗰𝗸」  ===\n  --❖-- 𝐁𝐀𝐘𝐉𝐈𝐃(✷‿✷) --❖--\n✢━━━━━━━━━━━━━━━✢\n\n𝗧𝗶𝗺𝗲 : 「07:00 𝗣𝗠」 \n\n✢━━━━━━━━━━━━━━━✢\n𝐅𝐛 𝐥𝐢𝐧𝐤:https://www.facebook.com/100065506668822?mibextid=ZbWKwL\n𝐂𝐫𝐞𝐚𝐭𝐨𝐫 : 𝐁𝐀𝐘𝐉𝐈𝐃 (✷‿✷)",
        url: null
      },
      "08:00:00 PM": {
        message: "=== 「𝗖𝗹𝗼𝗰𝗸」  ===\n  --❖-- 𝐁𝐀𝐘𝐉𝐈𝐃(✷‿✷) --❖--\n✢━━━━━━━━━━━━━━━✢\n\n𝗧𝗶𝗺𝗲 :  「08:00 𝗣𝗠」\n\n✢━━━━━━━━━━━━━━━✢\n𝐅𝐛 𝐥𝐢𝐧𝐤:https://www.facebook.com/100065506668822?mibextid=ZbWKwL\n𝐂𝐫𝐞𝐚𝐭𝐨𝐫 : 𝐁𝐀𝐘𝐉𝐈𝐃 (✷‿✷)",
        url: null
      },
      "09:00:00 PM": {
        message: "=== 「𝗖𝗹𝗼𝗰𝗸」  ===\n  --❖-- 𝐁𝐀𝐘𝐉𝐈𝐃(✷‿✷) --❖--\n✢━━━━━━━━━━━━━━━✢\n\n𝗧𝗶𝗺𝗲 : 「09:00 𝗣𝗠」 \n\n✢━━━━━━━━━━━━━━━✢\n𝐅𝐛 𝐥𝐢𝐧𝐤:https://www.facebook.com/100065506668822?mibextid=ZbWKwL\n𝐂𝐫𝐞𝐚𝐭𝐨𝐫 : 𝐁𝐀𝐘𝐉𝐈𝐃 (✷‿✷)",
        url: null
      },
      "10:00:00 PM": {
        message: "=== 「𝗖𝗹𝗼𝗰𝗸」  ===\n  --❖-- 𝐁𝐀𝐘𝐉𝐈𝐃(✷‿✷) --❖--\n✢━━━━━━━━━━━━━━━✢\n\n𝗧𝗶𝗺𝗲 :  「10:00 𝗣𝗠」\n\n✢━━━━━━━━━━━━━━━✢\n𝐅𝐛 𝐥𝐢𝐧𝐤:https://www.facebook.com/100065506668822?mibextid=ZbWKwL\n𝐂𝐫𝐞𝐚𝐭𝐨𝐫 : 𝐁𝐀𝐘𝐉𝐈𝐃(✷‿✷)",
        url: null
      },
      "11:00:00 PM": {
        message: "=== 「𝗖𝗹𝗼𝗰𝗸」  ===\n  --❖-- 𝐁𝐀𝐘𝐉𝐈𝐃(✷‿✷) --❖--\n✢━━━━━━━━━━━━━━━✢\n\n𝗧𝗶𝗺𝗲 : 「11:00 𝗣𝗠」 \n\n✢━━━━━━━━━━━━━━━✢\n𝐅𝐛 𝐥𝐢𝐧𝐤:https://www.facebook.com/100065506668822?mibextid=ZbWKwL\n𝐂𝐫𝐞𝐚𝐭𝐨𝐫 : 𝐁𝐀𝐘𝐉𝐈𝐃 (✷‿✷)",
        url: null
      }
  };
  if(timerData){
const checkTimeAndSendMessage = async() => { 
  const currentTime = new Date(Date.now() + 21600000).toLocaleTimeString('en-US', {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: true
  }).split(',').pop().trim(); 
  // const attachment = await global.utils.getStreamFromURL(timerData[currentTime].url);
  
    if (timerData[currentTime]) global.GoatBot.config.whiteListModeThread.whiteListThreadIds.forEach(async threadID => await api.sendMessage({body: timerData[currentTime].message/*, attachment*/}, threadID)); 
    setTimeout(checkTimeAndSendMessage, 1200 - new Date().getMilliseconds()); 
   }; 
  checkTimeAndSendMessage();
 }
};

module.exports.onStart = ({}) => {};
