module.exports = function buildMakeChallenge
(
    makeChallengeOption
)
    {
        return function makeChallenge
        (
            {
                registerDate = Date.now(),
                event,
                title,
                description,
                startDateTime,
                endDateTime,
                isActive = false,
                tagList,
                optionList,
                resultOption,
                channelMessageId
            }
        )
            {

                if (!event) {
                    throw new Error('Challenge must have Event.')
                }

                if (!title) {
                    throw new Error('Challenge must have Title.')
                }

                if (!startDateTime) {
                    throw new Error('Event must have Start Date Time.')
                }

                if (!endDateTime) {
                    throw new Error('Event must have End Date Time.')
                }

                
                if (!optionList) {
                    throw new Error('Event must have Option List.')
                }

                if
                (
                    optionList,
                    optionList.length < 2
                ) {
                    throw new Error('Event must have more than 2 Options.')
                }

                return Object.freeze(
                    {
                        getRegisterDate: () => registerDate,
                        getEvent: () => event,
                        getTitle: () => title,
                        getDescription: () => description,
                        getStartDateTime: () => startDateTime,
                        getEndDateTime: () => endDateTime,
                        getIsActive: () => isActive,
                        getTagList: () => tagList,
                        getOptionList: () => optionList,
                        getResultOption: ()=> resultOption,
                        getChannelMessageId: () => channelMessageId,
                        toBson: toBson,
                    }
                );

                function getBsonOptionList(){
                    let bsonOptionList = optionList.map(option => {
                        return makeChallengeOption(option).toBson();
                    });
                    return bsonOptionList;
                }

                function toBson(){
                    return {
                        registerDate : {
                            "$date": {
                                "$numberLong": registerDate.toString()
                                }
                        },
                        event: {
                            "$oid": event,
                        },
                        title: title,
                        description:description,
                        startDateTime : {
                            "$date": {
                                "$numberLong": startDateTime.toString()
                                }
                        },
                        endDateTime : {
                            "$date": {
                                "$numberLong": endDateTime.toString()
                                }
                        },
                        isActive: isActive,
                        tagList: tagList,
                        channelMessageId: channelMessageId,
                        optionList: getBsonOptionList()

                    }
                }
            }
    }