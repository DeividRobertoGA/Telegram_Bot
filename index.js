//Importando as Bibliotecas
import color from "colors";
import { Telegraf } from "telegraf";
import dotenv from "dotenv";

//Configurando Bibliotecas
dotenv.config();

//Criando o BOT
const bot = new Telegraf(process.env.BOT_TOKEN);

bot.start((ctx) => {
    ctx.reply("Bem Vindo!" + "\n" + "Como esta?");
});

bot.launch();

console.log("[BOT]".green + ` BOT Iniciado`);