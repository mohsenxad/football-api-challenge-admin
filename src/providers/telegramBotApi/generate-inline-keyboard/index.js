const buildGenerateInlineKeyboardMarkup = require('./src/generate-inline-keyboard-markup');
const generateInlineKeyboardMarkup = buildGenerateInlineKeyboardMarkup();

module.exports = Object.freeze(
    {
        generateInlineKeyboardMarkup
    }
)