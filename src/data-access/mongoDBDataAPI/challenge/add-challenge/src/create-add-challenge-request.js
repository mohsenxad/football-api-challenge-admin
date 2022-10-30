module.exports = function buildCreateAddChallengeRequest
(
    apikey,
    proxyAgent
)
    {
        return function createAddChallengeRequest
        (
            challenge
        )
            {
                const headers = {
                    "api-key": apikey,
                    "content-type":"application/json"
                };
        
                const body = JSON.stringify(
                    {
                        collection:"challenges",
                        database:"Football",
                        dataSource:"FootballDB",
                        document: challenge.toBson()
                    }
                )
        
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