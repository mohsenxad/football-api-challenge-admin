module.exports = function buildCreateDeleteChallengeByIdRequest
(
    apikey,
    proxyAgent
)
    {
        return function createDeleteChallengeByIdRequest
        (
            challengeId
        )
            {
                const query = {
                    "_id": 
                        { 
                            "$oid": challengeId
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
                        filter: query
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