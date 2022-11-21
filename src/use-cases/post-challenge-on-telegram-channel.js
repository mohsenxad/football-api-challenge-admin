module.exports = function buildPostChallengeOnTelegramChannel
(
    dataAccess,
    providerServices
)
    {
        return async function postChallengeOnTelegramChannel
        (
            challengeId
        )
            {
                const challenge = await dataAccess.dataApi.getChallengeById(
                    challengeId  
                );

                console.log(challenge);

                const foundEvent = await dataAccess.dataApi.getEventById(
                    challenge.event
                );

                console.log(foundEvent);

                if
                (
                    foundEvent &&
                    foundEvent.telegramGroupId
                )
                    {
                        const message = challenge.description;
                        // const postToChannelMessageId = await providerServices.telegramBot.sendMessage(
                        //     CHALNNEL_ID,
                        //     message,
                        //     {}
                        // )

                        const postToChannelMessageId = await providerServices.telegramBot.sendPhoto(
                            parseInt(foundEvent.telegramGroupId),
                            `https://football-storage-mohsenxad.fandogh.cloud/challenge?challengeId=${challenge._id}&t=${Date.now()}`,
                            message,
                            challenge.optionList
                        )

                        console.log(postToChannelMessageId);

                        const setChallengeChannelMessageIdResult = await dataAccess.dataApi.setChallengeChannelMessageId(
                            challengeId,
                            postToChannelMessageId
                        )

                        console.log(setChallengeChannelMessageIdResult);

                        return setChallengeChannelMessageIdResult;
                    }
                else
                    {
                        const noGroupCreatedForThisEventError = new Error(
                            `No Group Assigned For Event ${foundEvent.title}`
                        )
                        throw noGroupCreatedForThisEventError;
                    }

                

            }
    }