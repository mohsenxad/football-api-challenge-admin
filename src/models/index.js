const generateId = require('./generateId');
const buildMakeChallenge = require('./challenge');
const buildMakeChallengeOption = require('./challengeOption');


const makeChallengeOption = buildMakeChallengeOption(
    generateId
);
const makeChallenge = buildMakeChallenge(
    makeChallengeOption
);

module.exports = Object.freeze(
    {
        makeChallenge
    }
)