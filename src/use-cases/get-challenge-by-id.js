module.exports = function buildGetChallengeById
(
    dataAccess
)
    {
        return async function getChallengeById
        (
            challengeId    
        )
            {
                const foundChallenge = await dataAccess.dataApi.getChallengeById(
                    challengeId
                );
                return foundChallenge;
            }
    }