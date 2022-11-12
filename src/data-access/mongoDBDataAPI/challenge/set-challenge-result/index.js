const buildTranslateSetChallengeResultResponse = require('./src/translate-set-challenge-result-response');
const buildCreateSetChallengeResultRequest = require('./src/create-set-challenge-result-request');
const buildSetChallengeResult = require('./src/set-challenge-result');

module.exports = function(
    APPID,
    APIKEY,
    proxyAgent,
    fetch
)
    {
        const translateSetChallengeResultResponse = buildTranslateSetChallengeResultResponse();
        const createSetChallengeResultRequest = buildCreateSetChallengeResultRequest(
            APIKEY,
            proxyAgent
        );
        const setChallengeResult = buildSetChallengeResult(
            APPID,
            fetch,
            createSetChallengeResultRequest,
            translateSetChallengeResultResponse
        );

        return Object.freeze(
            {
                setChallengeResult
            }
        )
    }