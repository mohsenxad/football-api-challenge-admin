const buildAddChallenge = require('./add-challenge');
const buildGetChallengeById = require('./get-challenge-by-id');
const buildUpdateChallenge = require('./updat-challenge');
const buildDeleteChallengeById = require('./delete-challenge-by-id');
const buildGetAllChallengeByEvent = require('./get-all-challenge-by-event');
const buildPostChallengeOnTelegramChannel = require('./post-challenge-on-telegram-channel');
const buildSetChallengeResult = require('./set-challenge-result');
const buildCalculateChallengeScore = require('./calculate-challenge-score');
const buildPostChallengeWinnerOnGroup = require('./post-challenge-winner-on-group');

module.exports = function(
    {
        MONGODB_DATAAPI_APPID,
        MONGODB_DATAAPI_APIKEY
    },
    proxyUrl,
    {
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
        const getChallengeById = buildGetChallengeById(dataAccess);
        const updateChallenge = buildUpdateChallenge(dataAccess);
        const deleteChallengeById = buildDeleteChallengeById(dataAccess);
        
        const getAllChallengeByEvent = buildGetAllChallengeByEvent(dataAccess);
        
        const postChallengeOnTelegramChannel = buildPostChallengeOnTelegramChannel(
            dataAccess,
            providerServices
        );

        const calculateChallengeScore = buildCalculateChallengeScore(
            dataAccess
        )

        const postChallengeWinnerOnGroup = buildPostChallengeWinnerOnGroup(
            dataAccess,
            providerServices
        )

        const setChallengeResult = buildSetChallengeResult(
            dataAccess,
            providerServices,
            calculateChallengeScore,
            postChallengeWinnerOnGroup
        )

        const services =  Object.freeze(
            {
                getChallengeById,
                addChallenge,
                updateChallenge,
                deleteChallengeById,
                getAllChallengeByEvent,
                postChallengeOnTelegramChannel,
                setChallengeResult
            }
        );

        return services;
    }