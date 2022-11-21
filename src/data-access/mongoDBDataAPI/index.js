var fetch = require('node-fetch');
const HttpsProxyAgent = require('https-proxy-agent');

module.exports  = function
(
    APPID,
    APIKEY,
    proxyUrl
)
    {

        if(!APPID){
            throw new Error("MongoDB Data Api must have an APPID");
        }

        if(!APIKEY){
            throw new Error("MongoDB Data Api must have an APIKEY");
        }

        let proxyAgent = undefined;
        if(proxyUrl){
            proxyAgent = new HttpsProxyAgent(proxyUrl);
        }


        const { addChallenge } = require('./challenge/add-challenge')
        (
            APPID,
            APIKEY,
            proxyAgent,
            fetch
        );

        
        const { updateChallenge } = require('./challenge/update-challenge')
        (
            APPID,
            APIKEY,
            proxyAgent,
            fetch
        );

        
        const { deleteChallengeById } = require('./challenge/delete-challenge-by-id')
        (
            APPID,
            APIKEY,
            proxyAgent,
            fetch
        );

        const { getAllChallengeByEvent } = require('./challenge/get-all-challenge-by-event')
        (
            APPID,
            APIKEY,
            proxyAgent,
            fetch
        )

        
        const { getChallengeById } = require('./challenge/get-challenge-by-id')
        (
            APPID,
            APIKEY,
            proxyAgent,
            fetch
        )

        
        const { setChallengeChannelMessageId } = require('./challenge/set-challenge-channel-message-id')
        (
            APPID,
            APIKEY,
            proxyAgent,
            fetch
        )

        
        const { setChallengeResult } = require('./challenge/set-challenge-result')
        (
            APPID,
            APIKEY,
            proxyAgent,
            fetch
        )

        const { getEventById } = require('./event/get-event-by-id')
        (
            APPID,
            APIKEY,
            proxyAgent,
            fetch
        )

        const { getAllUserChallengeByChallengeId } = require('./user-challenge/get-all-user-challenge-by-challengeId')
        (
            APPID,
            APIKEY,
            proxyAgent,
            fetch
        )

        const { getAllUserChallengeByChallengeIdAndChallengeOptionId } = require('./user-challenge/get-all-user-challenge-by-challengeId-and-challengeOptionId')
        (
            APPID,
            APIKEY,
            proxyAgent,
            fetch
        )

        const { getAllUserByUserIdList } = require('./user/get-all-user-by-userIdList')
        (
            APPID,
            APIKEY,
            proxyAgent,
            fetch
        )

        
        const { increaseUserCreditByUserIdList } = require('./user/increase-user-credit-by-userIdList')
        (
            APPID,
            APIKEY,
            proxyAgent,
            fetch
        )

        
        return Object.freeze(
            {
                addChallenge,
                updateChallenge,
                deleteChallengeById,
                getAllChallengeByEvent,
                getChallengeById,
                setChallengeChannelMessageId,
                setChallengeResult,
                getEventById,
                getAllUserChallengeByChallengeId,
                getAllUserChallengeByChallengeIdAndChallengeOptionId,
                getAllUserByUserIdList,
                increaseUserCreditByUserIdList
            }
        );

    }