//Importando as Bibliotecas
import color from "colors";
import { Telegraf } from "telegraf";
import dotenv from "dotenv";

//Configurando Bibliotecas
dotenv.config();

//Criando o BOT
const bot = new Telegraf(process.env.BOT_TOKEN);

bot.start((ctx) => {
    ctx.reply("Primeiro messagem do BOT");
});

bot.command("button", (ctx) => {
    ctx.telegram.sendMessage(ctx.chat.id, "Criando Lista de Botões", {
        reply_markup: {
            inline_keyboard: [
                [{text: "URL Google", url: "www.google.com"}, {text: "Bot Function", callback_data: "botFunction"}],
                [{text: "URL Gmail", url: "www.mail.google.com"}]
            ]
        }
    });
});

bot.action("botFunction", (ctx) => {
    ctx.deleteMessage();
    ctx.telegram.sendMessage(ctx.chat.id, "Bot Function", {
        reply_markup: {
            inline_keyboard: [
                [{text: "Voltar menu", callback_data: "back-menu"}]
            ]
        }
    });
});

bot.action("back-menu", (ctx) => {
    ctx.deleteMessage();
    ctx.telegram.sendMessage(ctx.chat.id, "Criando Lista de Botões", {
        reply_markup: {
            inline_keyboard: [
                [{text: "URL Google", url: "www.google.com"}, {text: "Bot Function", callback_data: "botFunction"}],
                [{text: "URL Gmail", url: "www.mail.google.com"}]
            ]
        }
    });
});

bot.command("textstyle", (ctx) => {
    ctx.telegram.sendMessage(ctx.chat.id, "*bold \\*text*\n" +
        "_italic \\*text_\n" +
        "__underline__\n" +
        "~strikethrough~\n" +
        "||spoiler||\n" +
        "[inline URL](http://www.example.com/)\n" +
        "![👍](tg://emoji?id=5368324170671202286)\n",{
        parse_mode: "MarkdownV2"
    });
});

bot.launch();

console.log("[BOT]".green + ` BOT Iniciado`);