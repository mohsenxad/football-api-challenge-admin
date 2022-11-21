const models = require('../models');

module.exports = function buildUpdateChallenge
(
    dataAccess,
    providerServices
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
                        const foundEvent = await dataAccess.dataApi.getEventById(
                            challenge.getEvent()
                        );
                        if
                        (
                            challenge.getIsActive() == false
                        )
                            {
                                
                                const caption =  `🥹زمان شرکت در چالش به پایان رسید\n🤞 منتظر نتایج باشید`
                                const editGroupPostResult = await providerServices.telegramBot.editMessageCaption(
                                    parseInt(foundEvent.telegramGroupId),
                                    challenge.getChannelMessageId(),
                                    caption,
                                    []
                                );
                            }
                        else
                            {
                                const caption =  challenge.getDescription();
                                const editGroupPostResult = await providerServices.telegramBot.editMessageCaption(
                                    parseInt(foundEvent.telegramGroupId),
                                    challenge.getChannelMessageId(),
                                    caption,
                                    challenge.getOptionList()
                                );
                            }
                    }
                return updateChallengeResult;
            }
    }