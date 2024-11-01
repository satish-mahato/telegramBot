const { Telegraf } = require("telegraf");
const axios = require("axios");
require("dotenv").config();
const bot = new Telegraf(process.env.TelegramBot);
const binarySearchString = `
const binarySearch = function search(arr, x) {
    let lo = 0, hi = arr.length - 1;
    while(lo <= hi) {
        let mid = lo + Math.floor((hi - lo)/2);
        if(arr[mid] == x) return mid;
        else if(arr[mid] < x) {
            lo = mid + 1;
        } else {
            hi = mid - 1;
        }
    }
    return undefined;
}
`;
try {
  bot.start((ctx) => ctx.reply("Welcome to Satish Bot"));
  bot.command("binarysearch", (ctx) => ctx.reply(binarySearchString));
  bot.on("sticker", (ctx) => ctx.reply("❤️"));
  bot.command("binarytreejs", async (ctx) => {
    const response = await axios.get(
      "https://raw.githubusercontent.com/singhsanket143/FrontendDSA/master/Aug_29/trees.js"
    );
    ctx.reply(response.data);
  });
  bot.hears("hi", (ctx) => ctx.reply("Hey there"));
  bot.hears("mahesh", (ctx) => ctx.reply("Dalle😎"));

  bot.launch();
} catch {
  console.log("Unexpected Error");
}
