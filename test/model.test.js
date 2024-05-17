const { MongoMemoryServer } = require('mongodb-memory-server');
const mongoose = require('mongoose');
const Form = require('../server/form')

let con;
let mongod;

beforeAll( async() => {

    const mongod = await new MongoMemoryServer();
    await mongod.start();
    const mongoUri = await mongod.getUri();

    con = await mongoose.connect(mongoUri, { dbName: "verifyMASTER" });
});

  afterAll(async () => {
    if (con) {
      await con.disconnect();
    }
    if (mongod) {
      await mongod.stop();
    }
  });

  describe("MongodDB Tests", ()=>{
    test("Form document creation", async()=>{
        const form =  new Form({email:'foogar@foogar.com', text:"Some random foobar text"});
        await form.save();
    })
  })