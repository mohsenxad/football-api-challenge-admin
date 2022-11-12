const buildTranslateDeleteChallengeByIdResponse = require('./src/translate-delete-challenge-by-id-response');
const buildCreateDeleteChallengeByIdRequest = require('./src/create-delete-challenge-by-id-request');
const buildDeleteChallengeById = require('./src/delete-challenge-by-id');

module.exports = function(
    APPID,
    APIKEY,
    proxyAgent,
    fetch
)
    {
        const translateDeleteChallengeByIdResponse = buildTranslateDeleteChallengeByIdResponse();
        const createDeleteChallengeByIdRequest = buildCreateDeleteChallengeByIdRequest(
            APIKEY,
            proxyAgent
        );
        const deleteChallengeById = buildDeleteChallengeById(
            APPID,
            fetch,
            createDeleteChallengeByIdRequest,
            translateDeleteChallengeByIdResponse
        );

        return Object.freeze(
            {
                deleteChallengeById
            }
        )
    }