const models = require('../models');
module.exports = function buildAddChallenge
(
    dataAccess
)
    {
        return async function addChallenge
        (
            challengeInfo
        )
            {
                
                const challenge = models.makeChallenge(challengeInfo);
                console.log(dataAccess);
                const challengeId = await dataAccess.dataApi.addChallenge(challenge);
                
                return challengeId;
            }
    }