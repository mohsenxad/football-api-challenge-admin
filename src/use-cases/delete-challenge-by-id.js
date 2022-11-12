module.exports = function buildDeleteChallengeById
(
    dataAccess
)
    {
        return async function deleteChallengeById
        (
            challengeId
        )
            {
                //fetch event.if has channel post then remove it from channel

                const deleteResult = await dataAccess.dataApi.deleteChallengeById(
                    challengeId
                );

                return deleteResult;

            }
    }