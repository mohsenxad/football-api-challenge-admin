module.exports = function buildGetAllUserChallengeByChallengeIdAndChallengeOptionId
(
    APPID,
    fetch,
    buildCreateGetAllUserChallengeByChallengeIdAndChallengeOptionIdRequest,
    translateGetAllUserChallengeByChallengeIdAndChallengeOptionIdResponse
)
    {
        return async function getAllUserChallengeByChallengeIdAndChallengeOptionId
        (
            challengeId,
            challengeOptionId
        )
            {
                const options = buildCreateGetAllUserChallengeByChallengeIdAndChallengeOptionIdRequest(
                    challengeId,
                    challengeOptionId
                );
        
                const url = `https://data.mongodb-api.com/app/${APPID}/endpoint/data/v1/action/find`;
                
                const request = await fetch(
                    url,
                    options
                );
        
                const response = await request.json();

                const userChallengeList = translateGetAllUserChallengeByChallengeIdAndChallengeOptionIdResponse(
                    response
                );

                return userChallengeList;
            }
    }