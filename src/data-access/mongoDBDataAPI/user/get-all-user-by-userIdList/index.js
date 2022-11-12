const buildTranslateGetAllUserByUserIdListResponse = require('./src/translate-get-all-user-by-userIdList-response');
const buildCreateGetAllUserByUserIdListRequest = require('./src/create-get-all-user-by-userIdList-request');
const buildGetAllUserByUserIdList = require('./src/get-all-user-by-userIdList');

module.exports = function(
    APPID,
    APIKEY,
    proxyAgent,
    fetch
)
    {
        const translateGetAllUserByUserIdListResponse = buildTranslateGetAllUserByUserIdListResponse();
        const createGetAllUserByUserIdListRequest = buildCreateGetAllUserByUserIdListRequest(
            APIKEY,
            proxyAgent
        );
        const getAllUserByUserIdList = buildGetAllUserByUserIdList(
            APPID,
            fetch,
            createGetAllUserByUserIdListRequest,
            translateGetAllUserByUserIdListResponse
        );

        return Object.freeze(
            {
                getAllUserByUserIdList
            }
        )
    }