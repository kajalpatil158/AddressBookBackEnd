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

describe('POST/addData', () => {
    /*it('givenuserisnot_Whenadded_Shouldreturnstatus=404andsuccess=false', (done) => {
        const addressbookData = addressbooktest.AddressBookData;
        chai.request(server)
            .post('/addData')
            .send(addressbookData)
            .end((error, res) => {
                res.should.have.status(200);
                res.body.should.be.property('success').eq(true);
                res.body.should.be.property('message').eq("Address Book Data Is Added");
                done();
            });
    });*/

    it('givenuserisnotadded_Whenadded_Shouldreturnstatus=400andsuccess=false', (done) => {
        const addressbookData = addressbooktest.AddressBookWrongData;
        chai.request(server)
            .post('/addData')
            .send(addressbookData)
            .end((error, res) => {
                res.should.have.status(400);
                res.body.should.be.property('success').eq(false);
                res.body.should.be.property('message');
                done();
            });
    });

    it('givenuserisnotadded_Whenadded_Shouldreturnstatus=400andsuccess=false', (done) => {
        const addressbookData = addressbooktest.AddressBookWrongData;
        chai.request(server)
            .post('/addData')
            .send(addressbookData)
            .end((error, res) => {
                res.should.have.status(500);
                res.body.should.be.property('success').eq(false);
                res.body.should.be.property('error');
                res.body.should.be.property('message').eq("Eroor Occured While Creating Address Book Data");
                done();
            });
    });
});

describe('POST/adduser', () => {
    it('givenuserisnot_Whenadded_Shouldreturnstatus=404andsuccess=false', (done) => {
        const addressbookData = addressbooktest.userWrongData;
        chai.request(server)
            .post('/adduser')
            .send(addressbookData)
            .end((error, res) => {
                res.should.have.status(500);
                res.body.should.be.property('success').eq(false);
                res.body.should.be.property('message');
                done();
            });
    });


    /*  it('givenuserisnot_Whenadded_Shouldreturnstatus=404andsuccess=false', (done) => {
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


      /*it('givenemployeeis_Whenadded_Shouldreturnstatus=200andsuccess=trueandmessage=SuccessfullyAdded', (done) => {
          const addressbookData = addressbooktest.userData;
          console.log(addressbookData);
          chai.request(server)
              .post('/adduser')
              .send(addressbookData)
              .end((error, res) => {
                  res.should.have.status(200);
                  res.body.should.be.property('success').eq(true);
                  res.body.should.be.property('message').eq("User Data Is Added");
                  done();
              });
      });

      it('givenuserisnot_Whenadded_Shouldreturnstatus=404andsuccess=false', (done) => {
          const addressbookData = addressbooktest.userData;
          chai.request(server)
              .post('/adduser')
              .send(addressbookData)
              .end((error, res) => {
                  res.should.have.status(200);
                  res.body.should.be.property('success').eq(true);
                  res.body.should.be.property('message');
                  done();
                  s
              });
      });*/
});

let token = '';
console.log(token);
beforeEach(done => {
    chai
        .request(server)
        .post("/login")
        .send(addressbooktest.userLoginData)
        .end((err, res) => {
            token = res.body.token;
            res.should.have.status(200);
            done();
        });
});
describe("/GET /findAll", () => {
    it("giventoken_Whenvalid_Shouldretrivedatawithstatus=200andsuccess=truewithSuccessfullyretrivedatamessage", done => {
        chai
            .request(server)
            .get("/addressBook")
            .set('Authorization', 'bearar ' + token)
            .end((error, res) => {
                res.should.have.status(200);
                res.body.should.be.property('success').eq(true);
                res.body.should.have.property('message').eq("All Address Book Data Is Here")
                res.body.should.have.property('data')
                done();
            });
    });

    it("giventoken_Wheninvalid_Shouldnotretrivedatawithstatus=400andsuccess=false", done => {
        chai
            .request(server)
            .get("/addressBook")
            .set('Authorization', 'bearar ' + token.slice)
            .end((err, res) => {
                res.should.have.status(400);
                res.body.should.have.property('success').eq(false);
                res.body.should.have.property('message');
                done();
            });
    });

    it("giveninvalitoken_Whenretrived_Shouldreturnstatus401andsuccess=false", done => {
        var invalidToken = '';
        chai
            .request(server)
            .get("/addressBook")
            .set('Authorization', invalidToken)
            .end((err, res) => {
                res.should.have.status(404);
                res.body.should.have.property('success').eq(false);
                res.body.should.have.property('message').eq("Access Denied!, Unauthorised User");
                done();
            });
    });
});

describe("/GET /findOne", () => {
    it("giventoken_Whenvalid_Shouldretriveadatabyiswithstatus=200andsuccess=truewithsuccessfullyretrivedatamessage", done => {
        chai
            .request(server)
            .get("/addressBook/" + addressbooktest.AddressBookDataId.Id)
            .set('Authorization', 'bearer ' + token)
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.have.property('success').eq(true);
                res.body.should.have.property('data');
                done();
            });
    });

    it("giventoken_Wheninvalid_Shouldnotretrivedatawithstatus=404andsuccess=false", done => {
        chai
            .request(server)
            .get("/addressBook/" + addressbooktest.AddressBookDataWrongId.Id)
            .set('Authorization', 'bearer ' + token)
            .end((err, res) => {
                res.should.have.status(404);
                res.body.should.have.property('success').eq(false);
                res.body.should.have.property('message');
                done();
            });
    });
});

describe("/put /update /Id", () => {
    it("givendatacheckwithtoken_Whentokenisvalid_Shouldreturnstatus=200andsuccess=true", done => {
        const newData = addressbooktest.AddressBookData;
        chai
            .request(server)
            .put("/update/" + addressbooktest.AddressBookDataId.Id)
            .set('Authorization', 'bearar ' + token)
            .send(newData)
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.have.property('success').eq(true);
                res.body.should.have.property('message').eq("Address Book Data updated successfully");
                done();
            });
    });
    it("givendatacheckwithtoken_Whentokenisinvalid_Shouldreturnstatus=404andsuccess=false", done => {
        const newData = addressbooktest.AddressBookData;
        chai
            .request(server)
            .put("/update/" + addressbooktest.AddressBookDataWrongId.Id)
            .set('Authorization', 'bearar ' + token)
            .send(newData)
            .end((error, res) => {
                res.should.have.status(404);
                res.body.should.have.property('success').eq(false);
                res.body.should.have.property('message').eq("Address Book Data Not Finding With Given Id ");
                done();
            });
    });
});

describe("/delele/Id", () => {
    it("givenvalidtoken_Whenthatpass_Shoulddeletedatastatus=200success=true", done => {
        chai
            .request(server)
            .delete("/delete/" + addressbooktest.AddressBookDataId.Id)
            .set('Authorization', 'bearar ' + token)
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.have.property('success').eq(true);
                res.body.should.have.property('message');
                done();
            });
    });
    it("givenvalidtoken_Whenthatpass_Shoulddeletedatastatus=404success=false", done => {
        chai
            .request(server)
            .delete("/delete/" + addressbooktest.AddressBookDataWrongId.Id)
            .set('Authorization', 'bearar ' + token)
            .end((error, res) => {
                res.should.have.status(404);
                res.body.should.have.property('success').eq(false);
                res.body.should.have.property('message');
                done();
            });
    });
});