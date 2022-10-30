module.exports = function buildTranslateAddChallengeResponse
()
    {
        return function translateAddChallengeResponse
        (
            response
        )
            {
                console.log(response);
                return response.insertedId;
            }
    }