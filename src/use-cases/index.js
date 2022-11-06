const buildAddChallenge = require('./add-challenge');
const buildGetAllChallengeByEvent = require('./get-all-challenge-by-event');
const buildPostChallengeOnTelegramChannel = require('./post-challenge-on-telegram-channel');

module.exports = function(
    {
        MONGODB_DATAAPI_APPID,
        MONGODB_DATAAPI_APIKEY
    },
    proxyUrl,
    {
        CHALNNEL_ID,
        BOT_TOKEN
    }
)
    {
        const dataAccess = require('../data-access')(
            {
                MONGODB_DATAAPI_APPID,
                MONGODB_DATAAPI_APIKEY
            },
            proxyUrl
        );

        const providerServices = require('../providers')(
            BOT_TOKEN
        )

        const addChallenge = buildAddChallenge(dataAccess);
        const getAllChallengeByEvent = buildGetAllChallengeByEvent(dataAccess);
        
        const postChallengeOnTelegramChannel = buildPostChallengeOnTelegramChannel(
            dataAccess,
            providerServices,
            CHALNNEL_ID
        );

        const services =  Object.freeze(
            {
                addChallenge,
                getAllChallengeByEvent,
                postChallengeOnTelegramChannel
            }
        );

        return services;
    }