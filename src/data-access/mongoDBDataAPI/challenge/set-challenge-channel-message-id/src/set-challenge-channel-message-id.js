
module.exports = function buildSetChallengeChannelMessageId
(
    APPID,
    fetch,
    createSetChallengeChannelMessageIdRequest,
    translateSetChallengeChannelMessageId
)
    {
        return async function setChallengeChannelMessageId
        (
            challengeId,
            channelMessageId
        )
            {
                const options = createSetChallengeChannelMessageIdRequest(
                    challengeId,
                    channelMessageId
                );

        
                const url = `https://data.mongodb-api.com/app/${APPID}/endpoint/data/v1/action/updateOne`;
                
                const request = await fetch(
                    url,
                    options
                );
        
                const response = await request.json();

                const updateResult = translateSetChallengeChannelMessageId(
                    response
                );

                return updateResult;
            }
    }