const buildMakeChallenge = require('./challenge');


const makeChallenge = buildMakeChallenge();

module.exports = Object.freeze(
    {
        makeChallenge
    }
)