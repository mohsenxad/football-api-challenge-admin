module.exports = function buildGetAllUserChallengeByChallengeId
(
    APPID,
    fetch,
    buildCreateGetAllUserChallengeByChallengeIdRequest,
    translateGetAllUserChallengeByChallengeIdResponse
)
    {
        return async function getAllUserChallengeByChallengeId
        (
            challengeId
        )
            {
                const options = buildCreateGetAllUserChallengeByChallengeIdRequest(
                    challengeId
                );
        
                const url = `https://data.mongodb-api.com/app/${APPID}/endpoint/data/v1/action/find`;
                
                const request = await fetch(
                    url,
                    options
                );
        
                const response = await request.json();

                const userChallengeList = translateGetAllUserChallengeByChallengeIdResponse(
                    response
                );

                return userChallengeList;
            }
    }