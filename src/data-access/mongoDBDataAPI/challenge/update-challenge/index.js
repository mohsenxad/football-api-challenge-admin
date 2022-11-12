const buildTranslateUpdateChallengeResponse = require('./src/translate-update-challenge-response');
const buildCreateUpdateChallengeRequest = require('./src/create-update-challenge-request');
const buildUpdateChallenge = require('./src/update-challenge');

module.exports = function(
    APPID,
    APIKEY,
    proxyAgent,
    fetch
)
    {
        const translateUpdateChallengeResponse = buildTranslateUpdateChallengeResponse();
        const createUpdateChallengeRequest = buildCreateUpdateChallengeRequest(
            APIKEY,
            proxyAgent
        );
        const updateChallenge = buildUpdateChallenge(
            APPID,
            fetch,
            createUpdateChallengeRequest,
            translateUpdateChallengeResponse
        );

        return Object.freeze(
            {
                updateChallenge
            }
        )
    }