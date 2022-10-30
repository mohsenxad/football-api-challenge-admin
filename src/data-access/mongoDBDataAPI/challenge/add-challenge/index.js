const buildAddChallenge = require('./src/add-challenge');
const buildCreateAddChallengeRequest = require('./src/create-add-challenge-request');
const buildTranslateAddChallengeResponse = require('./src/translate-add-challenge-response');

module.exports = function(
    APPID,
    APIKEY,
    proxyAgent,
    fetch
)
    {
        const translateAddChallengeResponse = buildTranslateAddChallengeResponse();
        const createAddChallengeRequest = buildCreateAddChallengeRequest(
            APIKEY,
            proxyAgent
        );
        const addChallenge = buildAddChallenge(
            APPID,
            fetch,
            createAddChallengeRequest,
            translateAddChallengeResponse
        );

        return Object.freeze(
            {
                addChallenge
            }
        )
    }