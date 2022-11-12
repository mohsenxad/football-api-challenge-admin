module.exports = function buildGetAllUserByUserIdList
(
    APPID,
    fetch,
    createGetAllUserByUserIdListRequest,
    translateGetAllUserByUserIdListResponse
)
    {
        return async function getAllUserByUserIdList
        (
            userIdList
        )
            {
                const options = createGetAllUserByUserIdListRequest(
                    userIdList
                );

        
                const url = `https://data.mongodb-api.com/app/${APPID}/endpoint/data/v1/action/find`;
                
                const request = await fetch(
                    url,
                    options
                );
        
                const response = await request.json();

                const userList = translateGetAllUserByUserIdListResponse(
                    response
                );

                return userList;
            }
    }