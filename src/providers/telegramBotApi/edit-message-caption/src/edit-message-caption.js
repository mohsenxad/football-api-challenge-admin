module.exports = function buildEditMessageCaption
(
    BOT_TOKEN,
    fetch,
    createEditMessageCaptionRequest,
    translateEditMessageCaptioResponse
)
    {
        return async function editMessageCaption
        (
            chat_id,
            message_id,
            caption,
            reply_markup
        )
            {
                const options = createEditMessageCaptionRequest(
                    chat_id,
                    message_id,
                    caption,
                    reply_markup
                );

                const url = `https://api.telegram.org/bot${BOT_TOKEN}/editMessageCaption`;
                
                const request = await fetch(
                    url,
                    options
                );
        
                const response = await request.json();

                const sendMessageResponse = translateEditMessageCaptioResponse(response);

                return sendMessageResponse;
            }
    }