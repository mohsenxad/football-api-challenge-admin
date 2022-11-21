module.exports = function buildIncreaseUserCreditByUserIdList
(
    APPID,
    fetch,
    createIncreaseUserCreditByUserIdListRequest,
    translateIncreaseUserCreditByUserIdListResponse
)
    {
        return async function increaseUserCreditByUserIdList
        (
            userIdList,
            increaseValue
        )
            {
                const options = createIncreaseUserCreditByUserIdListRequest(
                    userIdList,
                    increaseValue
                );

                console.log(options);

                const url = `https://data.mongodb-api.com/app/${APPID}/endpoint/data/v1/action/updateMany`;
                
                const request = await fetch(
                    url,
                    options
                );
        
                const response = await request.json();

                const updateResult = translateIncreaseUserCreditByUserIdListResponse(
                    response
                );

                return updateResult;
            }
    }