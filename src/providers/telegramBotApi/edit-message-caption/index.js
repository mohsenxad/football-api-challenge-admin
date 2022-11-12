const buildTranslateEditMessageCaptioResponse = require('./src/translate-edit-message-caption-response');
const buildCreateEditMessageCaptionRequest = require('./src/create-edit-message-caption-request');
const buildEditMessageCaption = require('./src/edit-message-caption');

module.exports = function(
    BOT_TOKEN,
    proxyAgent,
    fetch,
    generateInlineKeyboardMarkup
)
    {
        const translateEditMessageCaptioResponse = buildTranslateEditMessageCaptioResponse();
        const createEditMessageCaptionRequest = buildCreateEditMessageCaptionRequest(
            proxyAgent,
            generateInlineKeyboardMarkup
        );
        const editMessageCaption = buildEditMessageCaption(
            BOT_TOKEN,
            fetch,
            createEditMessageCaptionRequest,
            translateEditMessageCaptioResponse
        );

        return Object.freeze(
            {
                editMessageCaption
            }
        )
    }