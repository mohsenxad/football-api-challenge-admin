module.exports = function buildCalculateChallengeScore
(
    dataAccess
)
    {
        return async function buildCalculateChallengeScore
        (
            challengeId
        )
            {
                const foundChallenge = await dataAccess.dataApi.getChallengeById(
                    challengeId
                );

                if
                (
                    foundChallenge
                )
                    {
                        if
                        (
                            foundChallenge.resultOption 
                        )
                            {
                                const winingUserChallengeList = await dataAccess.dataApi.getAllUserChallengeByChallengeIdAndChallengeOptionId(
                                    foundChallenge._id,
                                    foundChallenge.resultOption._id
                                );

                                

                                const winingUserChallengeUserIdList = winingUserChallengeList.map(userChallenge => 
                                    {
                                        return userChallenge.user;
                                    }
                                );

                                console.log(winingUserChallengeUserIdList);

                                const updateWiningUserCreditResult = await dataAccess.dataApi.increaseUserCreditByUserIdList(
                                    winingUserChallengeUserIdList,
                                    foundChallenge.revenue
                                );

                                console.log('updateWiningUserCreditResult');
                                console.log(updateWiningUserCreditResult);

                                const winingUserList = await dataAccess.dataApi.getAllUserByUserIdList(
                                    winingUserChallengeUserIdList
                                )

                                console.log(winingUserList);


                            }
                        else
                            {
                                const challengeHasNoResultYetError = new Error(
                                    `${foundChallenge.title} Has No Result Yet | id: ${foundChallenge.Id}`
                                )
                                throw challengeHasNoResultYetError;
                            }
                    }
                else
                    {
                        const noChallengeFoundWithIdError = new Error(`No Challenge Found with Id : ${challengeId}`);
                        throw noChallengeFoundWithIdError;
                    }
            }
    }