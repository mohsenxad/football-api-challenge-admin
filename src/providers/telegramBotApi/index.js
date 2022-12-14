module.exports = function(
    BOT_TOKEN,
    proxyAgent,
    fetch
)
    {
        if(!BOT_TOKEN){
            throw new Error('Telegram Provider need to have API token');
        }

        const { generateInlineKeyboardMarkup } = require('./generate-inline-keyboard');

        const { sendMessage }  = require('./send-message')(
            BOT_TOKEN,
            proxyAgent,
            fetch,
            generateInlineKeyboardMarkup
        );

        
        const { sendPhoto }  = require('./send-photo')(
            BOT_TOKEN,
            proxyAgent,
            fetch,
            generateInlineKeyboardMarkup
        );

        
        const { editMessageCaption }  = require('./edit-message-caption')(
            BOT_TOKEN,
            proxyAgent,
            fetch,
            generateInlineKeyboardMarkup
        );

        

        const services = Object.freeze(
            {
                sendMessage,
                sendPhoto,
                editMessageCaption
            }
        )

        return services;

    }

