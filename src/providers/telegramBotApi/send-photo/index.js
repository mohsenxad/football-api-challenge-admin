const buildTranslateSendPhotoResponse = require('./src/translate-send-photo-response');
const buildCreateSendPhotoRequest = require('./src/create-send-photo-request');
const buildSendPhoto = require('./src/send-photo');

module.exports = function(
    BOT_TOKEN,
    proxyAgent,
    fetch,
    generateInlineKeyboardMarkup
)
    {
        const translateSendPhotoResponse = buildTranslateSendPhotoResponse();
        const ccreateSendPhotoRequest = buildCreateSendPhotoRequest(
            proxyAgent,
            generateInlineKeyboardMarkup
        );
        const sendPhoto = buildSendPhoto(
            BOT_TOKEN,
            fetch,
            ccreateSendPhotoRequest,
            translateSendPhotoResponse
        );

        return Object.freeze(
            {
                sendPhoto
            }
        )
    }