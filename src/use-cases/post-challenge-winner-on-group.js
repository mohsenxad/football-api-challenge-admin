module.exports = function buildPostChallengeWinnerOnGroup
(
    dataAccess,
    providerServices
)
    {
        return async function postChallengeWinnerOnGroup
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

                    const foundEvent = await dataAccess.dataApi.getEventById(
                        foundChallenge.event
                    );

                    if
                    (
                        foundEvent &&
                        foundEvent.telegramGroupId
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

                                    const winingUserList = await dataAccess.dataApi.getAllUserByUserIdList(
                                        winingUserChallengeUserIdList
                                    )

                                    const winnerTelegramUserListText = winingUserList.map(
                                        user => 
                                            {
                                                if
                                                (
                                                    user.telegramUsername
                                                )
                                                    {
                                                        return `@${user.telegramUsername}`;
                                                    }
                                                else if
                                                (
                                                    user.telegramFirstname &&
                                                    user.telegramLastname 
                                                )
                                                    {
                                                        return `${user.telegramFirstname} ${user.telegramLastname}`;
                                                    }
                                                else if
                                                (
                                                    user.telegramFirstname &&
                                                    !user.telegramLastname 
                                                )
                                                    {
                                                        return `${user.telegramFirstname}`;
                                                    }
                                                else if
                                                (
                                                    !user.telegramFirstname &&
                                                    user.telegramLastname 
                                                )
                                                    {
                                                        return `${user.telegramLastname}`;
                                                    }
                                                else
                                                    {
                                                        return '';
                                                    }
                                                
                                            }
                                    ).join("\n")

                                    const message = `
                                    🎊🎉 برندگان چالش ${foundChallenge.title} ${foundEvent.title} 🎉🎊\n
                                        ${winnerTelegramUserListText}
                                    `

                                    const postToChannelMessageId = await providerServices.telegramBot.sendMessage(
                                        foundEvent.telegramGroupId,
                                        message,
                                        {}
                                    )

                                    

                                    
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
                            const challengeEventHasNoTelegramGroupIdError = new Error(
                                `Challange Event Has No Telegram Group Id ${foundEvent.title}`
                            );
                        }
                }
            else
                {
                    const noChallengeFoundWithIdError = new Error(`No Challenge Found with Id : ${challengeId}`);
                    throw noChallengeFoundWithIdError;
                }
            
        }
    }