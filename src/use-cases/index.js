const buildAddChallenge = require('./add-challenge');
// const buildGetAllEventByUser = require('./get-all-event-by-user');

module.exports = function(
    {
        MONGODB_DATAAPI_APPID,
        MONGODB_DATAAPI_APIKEY
    },
    proxyUrl
)
    {
        const dataAccess = require('../data-access')(
            {
                MONGODB_DATAAPI_APPID,
                MONGODB_DATAAPI_APIKEY
            },
            proxyUrl
        );

        const addChallenge = buildAddChallenge(dataAccess);
        // const getAllEventByUser = buildGetAllEventByUser(dataAccess);
        

        const services =  Object.freeze(
            {
                addChallenge,
                // getAllEventByUser
            }
        );

        return services;
    }