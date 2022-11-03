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

        const { getAllChallengeByEvent } = require('./challenge/get-all-challenge-by-event')
        (
            APPID,
            APIKEY,
            proxyAgent,
            fetch
        )

        return Object.freeze(
            {
                addChallenge,
                getAllChallengeByEvent
            }
        );

    }