module.exports = function buildTranslateEditMessageCaptioResponse
()
    {
        return function translateEditMessageCaptioResponse
        (
            response
        )
            {
                console.log(response);
                if(
                    response.ok == true &&
                    response.result
                ){
                    return response.result.message_id;    
                }
            }
    }