module.exports = function buildCreateIncreaseUserCreditByUserIdListRequest
(
    apikey,
    proxyAgent
)
    {
        return function createIncreaseUserCreditByUserIdListRequest
        (
            userIdList,
            increaseValue
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
    
                const update = {
                    "$inc": {
                        credit: increaseValue
                    }
                };
    
                const headers = {
                    "api-key": apikey,
                    "content-type":"application/json"
                };
    
                const body = JSON.stringify(
                    {
                        collection:"users",
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