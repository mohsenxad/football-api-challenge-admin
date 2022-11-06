module.exports = function buildGetChallengeById
(
    APPID,
    fetch,
    createGetChallengeByIdRequest,
    translateGetChallengeByIdResponse
)
    {
        return async function getChallengeById
        (
            challengeId
        )
            {
                const options = createGetChallengeByIdRequest(
                    challengeId
                );

        
                const url = `https://data.mongodb-api.com/app/${APPID}/endpoint/data/v1/action/findOne`;
                
                const request = await fetch(
                    url,
                    options
                );
        
                const response = await request.json();

                const challenge = translateGetChallengeByIdResponse(
                    response
                );

                return challenge;
            }
    }