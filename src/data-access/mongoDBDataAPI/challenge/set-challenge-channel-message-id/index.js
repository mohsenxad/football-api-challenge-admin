const buildTranslateSetChallengeChannelMessageIdResponse = require('./src/translate-set-challenge-channel-message-id-response');
const buildCreateSetChallengeChannelMessageIdRequest = require('./src/create-set-challenge-channel-message-id-request');
const buildSetChallengeChannelMessageId = require('./src/set-challenge-channel-message-id');

module.exports = function(
    APPID,
    APIKEY,
    proxyAgent,
    fetch
)
    {
        const translateSetChallengeChannelMessageIdResponse = buildTranslateSetChallengeChannelMessageIdResponse();
        const createSetChallengeChannelMessageIdRequest = buildCreateSetChallengeChannelMessageIdRequest(
            APIKEY,
            proxyAgent
        );
        const setChallengeChannelMessageId = buildSetChallengeChannelMessageId(
            APPID,
            fetch,
            createSetChallengeChannelMessageIdRequest,
            translateSetChallengeChannelMessageIdResponse
        );

        return Object.freeze(
            {
                setChallengeChannelMessageId
            }
        )
    }