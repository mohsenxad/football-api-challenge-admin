const models = require('../models');

module.exports = function buildUpdateChallenge
(
    dataAccess
)
    {
        return async function updateChallenge
        (
            challengeId,
            challengeInfo
        )
            {
                const challenge = models.makeChallenge(challengeInfo);
                const updateChallengeResult = await dataAccess.dataApi.updateChallenge(
                    challengeId,
                    challenge
                );

                if(
                    challenge.getChannelMessageId()
                )
                    {
                        //update Post On channel
                    }
                return updateChallengeResult;
            }
    }