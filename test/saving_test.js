const assert = require('assert');
const person = require('../models/people');


describe('saves to db', () => {
    it('should ', (done) => {
        const newPerson = new person({ name: 'Cindy-lou', age: 7})
        newPerson.save().then(()=> {
            assert(newPerson.isNew === false);
            done()
        })
    });
})