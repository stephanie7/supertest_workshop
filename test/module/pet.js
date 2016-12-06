var should = require('chai').should(),

    assert = require('assert')
    request = require('supertest')("http://petstore.swagger.io/v2");

//宠物信息
var pet_id = pet_id;
//var store_id = store_id;

describe('As a management for pet store, I need to manage kinds of pets.', function() {
    it('The management should add a new pet in my store successfully.', function(done) {
        request.post('/pet')
            .send({
                    "id": 10,
                    "category": {
                    "id": 11,
                    "name": "一号宠物店"},

                    "name": "doggie",
                    "photoUrls": [
                        "http://www.mypet.picture.com"],
                    "tags": [{
                            "id": 12,
                            "name": "my pet"
                        }],
                    "status": "available"
            })
            .expect(200, function(err, info){
            pet_id = info.res.body.id
            done();
            return pet_id;
        });
    });

   it('The management should get the pet which is just added by pet_id.', function(done) {
        request.get('/pet/findByStatus')
            .expect(200,done);
    });

});




