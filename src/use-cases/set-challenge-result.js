module.exports = function buildSetChallengeResult
(
    dataAccess,
    providerServices,
    calculateChallengeScore,
    postChallengeWinnerOnGroup
)
    {
        return async function setChallengeResult
        (
            challengeId,
            resultChallengeOptionId
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

                        const foundOption = foundChallenge.optionList.find(
                            option => 
                                {
                                    if
                                    (
                                        option._id == resultChallengeOptionId
                                    )
                                        {
                                            return option;
                                        }
                                }
                        );

                        if
                        (
                            foundOption  
                        )
                            {
                                const updatChallengeResultOptionResult = await dataAccess.dataApi.setChallengeResult(
                                    foundChallenge._id,
                                    foundOption
                                );

                                console.log(updatChallengeResultOptionResult);

                                //deactive challenge
                                

                                const foundEvent = await dataAccess.dataApi.getEventById(
                                    foundChallenge.event
                                );



                                const caption =  `
                                    نتیجه ی مسابقه مشخص شد : ${foundOption.title}
                                `
                                const editGroupPostResult = await providerServices.telegramBot.editMessageCaption(
                                    parseInt(foundEvent.telegramGroupId),
                                    foundChallenge.channelMessageId,
                                    caption,
                                    []
                                );


                                console.log(editGroupPostResult);

                                await calculateChallengeScore(
                                    foundChallenge._id
                                )

                                await postChallengeWinnerOnGroup(
                                    foundChallenge._id
                                )
                                
                                return editGroupPostResult;
                                

                                // calculate sscoress
                                // get all userchallenge list of challenge
                                // if userChallenge wins add score to usser
                            }
                        else
                            {
                                const noChallengeOptionFoundInChallengeOptionListError = new Error(
                                    `No Challenge Option found in Challenge Option with Id ${resultChallengeOptionId}`
                                );
                                throw noChallengeOptionFoundInChallengeOptionListError;
                            }
                    }
                else
                    {
                        const noChallengeFoundWithIdError = new Error(`No Challenge Found with Id : ${challengeId}`);
                        throw noChallengeFoundWithIdError;
                    }
                
            }
    }