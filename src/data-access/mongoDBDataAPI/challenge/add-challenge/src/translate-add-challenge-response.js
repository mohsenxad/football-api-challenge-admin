module.exports = function buildTranslateAddChallengeResponse
()
    {
        return function translateAddChallengeResponse
        (
            response
        )
            {
                return response.insertedId;
            }
    }