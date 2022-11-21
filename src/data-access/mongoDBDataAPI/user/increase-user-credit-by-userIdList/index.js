const buildTranslateIncreaseUserCreditByUserIdListResponse = require('./src/translate-increase-user-credit-by-userIdList-response');
const buildCreateIncreaseUserCreditByUserIdListRequest = require('./src/create-increase-user-credit-by-userIdList-request');
const buildIncreaseUserCreditByUserIdList = require('./src/increase-user-credit-by-userIdList');

module.exports = function(
    APPID,
    APIKEY,
    proxyAgent,
    fetch
)
    {
        const translateIncreaseUserCreditByUserIdListResponse = buildTranslateIncreaseUserCreditByUserIdListResponse();
        const createIncreaseUserCreditByUserIdListRequest = buildCreateIncreaseUserCreditByUserIdListRequest(
            APIKEY,
            proxyAgent
        );
        const increaseUserCreditByUserIdList = buildIncreaseUserCreditByUserIdList(
            APPID,
            fetch,
            createIncreaseUserCreditByUserIdListRequest,
            translateIncreaseUserCreditByUserIdListResponse
        );

        return Object.freeze(
            {
                increaseUserCreditByUserIdList
            }
        )
    }