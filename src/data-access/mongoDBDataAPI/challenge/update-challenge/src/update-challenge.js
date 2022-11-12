module.exports = function buildUpdateChallenge
(
    APPID,
    fetch,
    createUpdateChallengeRequest,
    translateUpdateChallengeResponse
)
    {
        return async function updateChallenge
        (
            challengeId,
            challenge
        )
            {
                const options = createUpdateChallengeRequest(
                    challengeId,
                    challenge
                );

                console.log(options);

                const url = `https://data.mongodb-api.com/app/${APPID}/endpoint/data/v1/action/updateOne`;
                
                const request = await fetch(
                    url,
                    options
                );
        
                const response = await request.json();

                const updateResult = translateUpdateChallengeResponse(
                    response
                );

                return updateResult;
            }
    }