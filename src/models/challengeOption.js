module.exports = function buildMakeChallengeOption
(
    generateNewId
)
    {
        return function makeChallengeOption
        (
            {
                _id = generateNewId(),
                title
            }
        )
            {
                if (!title) {
                    throw new Error('User Challenge Option must have title.')
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