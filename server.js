const express = require('express')
const { Telegraf, Markup } = require("telegraf");
const app = express()
const port = process.env.PORT || 3000

app.get('/', (req, res) => {
    res.send('Hello World!!!')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})


const token = '6645397028:AAGPNe5evoTMKPoWw95a9vq6PP6lWz6roIs'

const bot = new Telegraf(token);


bot.command("map", (ctx) => {
    return ctx.reply(
        "Карта открыта",
        Markup.keyboard([
            Markup.button.webApp(
                "Карта",
                "https://asd.web.app/"
            ),
        ], {}),
    );
});
// bot.on("message", async (ctx) => {
//     console.log(ctx.message.web_app_data)
//     return ctx.reply(ctx.message.web_app_data.data)
//
// });

bot.launch();
