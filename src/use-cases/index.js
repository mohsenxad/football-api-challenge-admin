const buildAddChallenge = require('./add-challenge');
const buildGetAllChallengeByEvent = require('./get-all-challenge-by-event');

module.exports = function(
    {
        MONGODB_DATAAPI_APPID,
        MONGODB_DATAAPI_APIKEY
    },
    proxyUrl
)
    {
        const dataAccess = require('../data-access')(
            {
                MONGODB_DATAAPI_APPID,
                MONGODB_DATAAPI_APIKEY
            },
            proxyUrl
        );

        const addChallenge = buildAddChallenge(dataAccess);
        const getAllChallengeByEvent = buildGetAllChallengeByEvent(dataAccess);
        

        const services =  Object.freeze(
            {
                addChallenge,
                getAllChallengeByEvent
            }
        );

        return services;
    }