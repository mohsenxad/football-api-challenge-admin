module.exports = function buildSetChallengeResult
(
    APPID,
    fetch,
    createSetChallengeResultRequest,
    translateSetChallengeResultResponse
)
    {
        return async function setChallengeResult
        (
            challengeId,
            resultOption
        )
            {
                const options = createSetChallengeResultRequest(
                    challengeId,
                    resultOption
                );

        
                const url = `https://data.mongodb-api.com/app/${APPID}/endpoint/data/v1/action/updateOne`;
                
                const request = await fetch(
                    url,
                    options
                );
        
                const response = await request.json();

                const updateResult = translateSetChallengeResultResponse(
                    response
                );

                return updateResult;
            }
    }