const buildTranslateGetAllUserChallengeByChallengeIdAndChallengeOptionIdResponse = require('./src/translate-get-all-user-challenge-by-challengeId-and-challengeOptionId-response');
const buildCreateGetAllUserChallengeByChallengeIdAndChallengeOptionIdRequest = require('./src/create-get-all-user-challenge-by-challengeId-and-challengeOptionId-request');
const buildGetAllUserChallengeByChallengeIdAndChallengeOptionId = require('./src/get-all-user-challenge-by-challengeId-and-challengeOptionId');

module.exports = function(
    APPID,
    APIKEY,
    proxyAgent,
    fetch
)
    {
        const translateGetAllUserChallengeByChallengeIdAndChallengeOptionIdResponse = buildTranslateGetAllUserChallengeByChallengeIdAndChallengeOptionIdResponse();
        const createGetAllUserChallengeByChallengeIdAndChallengeOptionIdRequest = buildCreateGetAllUserChallengeByChallengeIdAndChallengeOptionIdRequest(
            APIKEY,
            proxyAgent
        );
        const getAllUserChallengeByChallengeIdAndChallengeOptionId = buildGetAllUserChallengeByChallengeIdAndChallengeOptionId(
            APPID,
            fetch,
            createGetAllUserChallengeByChallengeIdAndChallengeOptionIdRequest,
            translateGetAllUserChallengeByChallengeIdAndChallengeOptionIdResponse
        );

        return Object.freeze(
            {
                getAllUserChallengeByChallengeIdAndChallengeOptionId
            }
        )
    }