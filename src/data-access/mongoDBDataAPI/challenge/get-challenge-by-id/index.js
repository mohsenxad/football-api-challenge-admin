const buildTranslateGetChallengeByIdResponse = require('./src/translate-get-challenge-by-id-response');
const buildCreateGetChallengeByIdRequest = require('./src/create-get-challenge-by-id-request');
const buildGetChallengeById = require('./src/get-challenge-by-id');

module.exports = function(
    APPID,
    APIKEY,
    proxyAgent,
    fetch
)
    {
        const translateGetChallengeByIdResponse = buildTranslateGetChallengeByIdResponse();
        const createGetChallengeByIdRequest = buildCreateGetChallengeByIdRequest(
            APIKEY,
            proxyAgent
        );
        const getChallengeById = buildGetChallengeById(
            APPID,
            fetch,
            createGetChallengeByIdRequest,
            translateGetChallengeByIdResponse
        );

        return Object.freeze(
            {
                getChallengeById
            }
        )
    }