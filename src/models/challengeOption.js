module.exports = function buildMakeChallengeOption
(
    generateNewId
)
    {
        return function makeChallengeOption
        (
            {
                _id,
                title
            }
        )
            {
                if (!title) {
                    throw new Error('User Challenge Option must have title.')
                }

                console.log(_id);
                if(
                    !_id
                ){
                    console.log('Generate New Id');
                    _id = generateNewId()
                }

                return Object.freeze(
                    {
                        getId: () => _id,
                        getTitle: () => title,
                        toBson: toBson,
                    }
                );

                function toBson()
                    {
                        return {
                            _id: {
                                "$oid": _id,
                            },
                            title: title
                        }
                    }
            }
    }