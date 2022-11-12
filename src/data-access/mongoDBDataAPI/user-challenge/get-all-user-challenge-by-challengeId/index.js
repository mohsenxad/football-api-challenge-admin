const buildTranslateGetAllUserChallengeByChallengeIdResponse = require('./src/translate-get-all-user-challenge-by-challengeId-response');
const buildCreateGetAllUserChallengeByChallengeIdRequest = require('./src/create-get-all-user-challenge-by-challengeId-request');
const buildGetAllUserChallengeByChallengeId = require('./src/get-all-user-challenge-by-challengeId');

module.exports = function(
    APPID,
    APIKEY,
    proxyAgent,
    fetch
)
    {
        const translateGetAllUserChallengeByChallengeIdResponse = buildTranslateGetAllUserChallengeByChallengeIdResponse();
        const createGetAllUserChallengeByChallengeIdRequest = buildCreateGetAllUserChallengeByChallengeIdRequest(
            APIKEY,
            proxyAgent
        );
        const getAllUserChallengeByChallengeId = buildGetAllUserChallengeByChallengeId(
            APPID,
            fetch,
            createGetAllUserChallengeByChallengeIdRequest,
            translateGetAllUserChallengeByChallengeIdResponse
        );

        return Object.freeze(
            {
                getAllUserChallengeByChallengeId
            }
        )
    }