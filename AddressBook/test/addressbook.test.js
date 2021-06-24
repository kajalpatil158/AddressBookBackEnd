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

    it('givendatareturnbody_Whenlogin_Shouldreturnsuccess=falsewithstatus=404code ', (done) => {
        const addressbookData = addressbooktest.userLoginWrongData;
        chai.request(server)
            .post('/login')
            .send(addressbookData)
            .end((error, res) => {
                res.should.have.status(404);
                res.body.should.be.property('success').eq(false);
                done();
            });
    });
});

describe('POST/adduser', () => {
    /* it('givenemployeeis_Whenadded_Shouldreturnstatus=200andsuccess=trueandmessage=SuccessfullyAdded', (done) => {
         const addressbookData = addressbooktest.userData;
         console.log(addressbookData);
         chai.request(server)
             .post('/adduser')
             .send(addressbookData)
             .end((error, res) => {
                 res.should.have.status(200);
                 res.body.should.be.property('success').eq(true);
                 res.body.should.be.property('message').eq("Address Book Data Is Added");
                 done();
             });
     });*/

    it('givenemployeeisnot_Whenadded_Shouldreturnstatus=404andsuccess=false', (done) => {
        const addressbookData = addressbooktest.userWrongData;
        chai.request(server)
            .post('/adduser')
            .send(addressbookData)
            .end((error, res) => {
                res.should.have.status(400);
                res.body.should.be.property('success').eq(false);
                res.body.should.be.property('message')
                done();
            });
    });

});