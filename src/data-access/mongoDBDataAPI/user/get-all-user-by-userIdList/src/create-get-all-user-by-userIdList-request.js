module.exports = function buildCreateGetAllUserByUserIdListRequest
(
    apikey,
    proxyAgent
)
    {
        return function createGetAllUserByUserIdListRequest
        (
            userIdList
        )
            {
                const bsonUserIdList = userIdList.map(
                    userId => 
                        {
                            return { 
                                "$oid": userId
                            } 
                        }
                    )
                const query = {
                    "_id": 
                        {
                            $in: bsonUserIdList
                        } 
                };

                console.log(query);

                const headers = {
                    "api-key": apikey,
                    "content-type":"application/json"
                };
        
                const body = JSON.stringify(
                    {
                        collection:"users",
                        database:"Football",
                        dataSource:"FootballDB",
                        filter: query
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