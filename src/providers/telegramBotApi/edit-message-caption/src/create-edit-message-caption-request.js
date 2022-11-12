module.exports = function buildCreateEditMessageCaptionRequest
(
    proxyAgent,
    generateInlineKeyboardMarkup
)
    {
        return function createEditMessageCaptionRequest
        (
            chat_id,
            message_id,
            caption,
            reply_markup
        )
            {
                const headers = {
                    "content-type":"application/json"
                };
        
                const body = JSON.stringify(
                    {
                        chat_id: chat_id,
                        message_id: message_id,
                        caption: caption,
                        reply_markup: generateInlineKeyboardMarkup(reply_markup)
                    }
                )

        
                var options= {
                    method:"POST",
                    headers: headers,
                    body: body
                };
        
        
                if(proxyAgent){
                    options.agent = proxyAgent;
                }
        
                return options;
            }
    }