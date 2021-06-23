const chai = require('chai');
const server = require('../server');
const chaiHttp = require("chai-http");
chai.should();
chai.use(chaiHttp);

const fs = require('fs');
let data = fs.readFileSync('test/addressbook.json');
let addressbooktest = JSON.parse(data);

describe('POST/login', () => {
    it('givendatareturnbody_Whenlogin_Shouldreturnsuccess=truewith200statuscodeandsuccessfullloginmessage ', (done) => {
        const addressbookData = addressbooktest.userLoginData;
        chai.request(server)
            .post('/login')
            .send(addressbookData)
            .end((error, res) => {
                res.should.have.status(200);
                res.body.should.be.property('success').eq(true);
                res.body.should.be.property('message').eq("User Login Successfull!!");
                res.body.should.be.property('token');
                done();
            });
    });
});