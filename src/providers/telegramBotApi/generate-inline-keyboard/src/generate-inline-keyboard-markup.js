module.exports = function buildGenerateInlineKeyboardMarkup
()
    {
        return function generateInlineKeyboardMarkup
        (
            inlineKeyboardButtonList
        )
            {
                let inline_keyboard = [];
                inlineKeyboardButtonList.forEach(inlineKeyboardButtonItem => 
                    {
                        const inlineKeyboardButton = [
                            {
                                text : inlineKeyboardButtonItem.title,
                                callback_data: inlineKeyboardButtonItem._id,
                            }
                        ];
                        inline_keyboard.push(inlineKeyboardButton);
                        
                    }
                );
                const inlineKeyboardMarkup = {
                    inline_keyboard: inline_keyboard
                }
                return inlineKeyboardMarkup;
            }
    }