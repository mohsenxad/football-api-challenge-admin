module.exports = function buildDeleteChallengeById
(
    APPID,
    fetch,
    createDeleteChallengeByIdRequest,
    translateDeleteChallengeByIdResponse
)
    {
        return async function deleteChallengeById
        (
            challengeId
        )
            {
                const options = createDeleteChallengeByIdRequest(
                    challengeId
                );

        
                const url = `https://data.mongodb-api.com/app/${APPID}/endpoint/data/v1/action/deleteOne`;
                
                const request = await fetch(
                    url,
                    options
                );
        
                const response = await request.json();

                const deleteResult = translateDeleteChallengeByIdResponse(
                    response
                );

                return deleteResult;
            }
    }