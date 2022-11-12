module.exports = function buildCreateGetAllUserChallengeByChallengeIdAndChallengeOptionIdRequest
(
    apikey,
    proxyAgent
)
    {
        return function createGetAllUserChallengeByChallengeIdAndChallengeOptionIdRequest
        (
            challengeId,
            challengeOptionId
        )
            {
                const query = {
                    "challenge": 
                        { 
                            "$oid": challengeId
                        },
                    "challengeOption":
                        { 
                            "$oid": challengeOptionId
                        },
                };

                const headers = {
                    "api-key": apikey,
                    "content-type":"application/json"
                };

                const projection = {}

                const body = JSON.stringify(
                    {
                        collection:"userChallenges",
                        database:"Football",
                        dataSource:"FootballDB",
                        filter: query,
                        projection:projection
                    }
                );
        
                var options= {
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