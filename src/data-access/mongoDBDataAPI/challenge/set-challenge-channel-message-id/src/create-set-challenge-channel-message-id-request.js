module.exports = function buildCreateSetChallengeChannelMessageIdRequest
(
    apikey,
    proxyAgent
)
    {
        return function createSetChallengeChannelMessageIdRequest
        (
            challengeId,
            channelMessageId
        )
            {
                const query = {
                    "_id": 
                        { 
                            "$oid": challengeId
                        } 
                };
    
                const update = {
                    "$set": {
                        channelMessageId: channelMessageId
                    }
                };
    
                const headers = {
                    "api-key": apikey,
                    "content-type":"application/json"
                };
    
                const body = JSON.stringify(
                    {
                        collection:"challenges",
                        database:"Football",
                        dataSource:"FootballDB",
                        filter: query,
                        update: update
                    }
                );
    
                var options = {
                    method:"POST",
                    headers: headers,
                    body: body
                };
    
                if(proxyAgent){
                    options.agent = proxyAgent;
                }
        
        
                return options;
            }
    }