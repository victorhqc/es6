require('../boot/db');
const request = require('supertest');

describe('Test Pokemon API', function() {
    const url = 'http://localhost:3000';

    //before();
    it('Should return Pokemon list', function(done) {
        request(url)
        .get('/v1/pokemon')
        .end(function(err, res) {
            if(err) { throw err; }

            res.should.have.status(200);
            done();
        });
    });
});
