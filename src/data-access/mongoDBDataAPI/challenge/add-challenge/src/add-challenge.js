module.exports = function buildAddChallenge
(
    APPID,
    fetch,
    createAddChallengeRequest,
    translateAddChallengeResponse
)
    {
        return async function AddChallenge
        (
            challenge
        )
            {
                const options = createAddChallengeRequest(
                    challenge
                );

                const url = `https://data.mongodb-api.com/app/${APPID}/endpoint/data/v1/action/insertOne`;

                const request = await fetch(
                    url,
                    options
                );

                const response = await request.json();

                const challengeId = translateAddChallengeResponse(response);
                
                return challengeId;
            }
    }