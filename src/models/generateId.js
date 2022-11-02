
const {ObjectId} = require('mongodb');
 
function generateId(){
    const newId = new ObjectId();
    return newId;
}

module.exports = generateId;