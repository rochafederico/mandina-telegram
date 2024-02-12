import { Injectable } from '@nestjs/common';
import * as TelegramBot from 'node-telegram-bot-api';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class TelegramService {
    private bot: TelegramBot;

    constructor(
        private configService: ConfigService
    ) {
        const token = this.configService.get<string>('telegram.token');
        this.bot = new TelegramBot(token, { polling: true });

        this.bot.on('message', async (msg) => {
            switch (msg.chat.type) {
                case 'private':
                    await this.sendMessage(msg);
                    break;

                default:
                    break;
            }
        });
    }

    public async sendMessage(message) {
        const chatId = message.chat.id;

        const response = 'Estoy poniendo a trabajar algunos humanos para saber como responderte';

        this.bot.sendMessage(chatId, response);
    }

}