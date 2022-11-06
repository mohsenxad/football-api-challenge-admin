module.exports = function buildPostChallengeOnTelegramChannel
(
    dataAccess,
    providerServices,
    CHALNNEL_ID
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

                const message = `Challenge is ${challenge.title}`
                // const postToChannelMessageId = await providerServices.telegramBot.sendMessage(
                //     CHALNNEL_ID,
                //     message,
                //     {}
                // )

                const postToChannelMessageId = await providerServices.telegramBot.sendPhoto(
                    CHALNNEL_ID,
                    'https://cdn.fecharge.ir/tdlte.jpg',
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
    }