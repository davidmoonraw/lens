const {form} = require('../server/handler/index');
const { mockRequest, mockResponse } = require('jest-mock-req-res');


const mongoose = require('mongoose');
require('dotenv').config({path:".env"});
const {MONGO_USER, MONGO_KEY, MONGO_HOSTNAME, MONGO_DB} = process.env;
//Non existent db gets created automatically
const URI = `mongodb+srv://${MONGO_USER}:${MONGO_KEY}@${MONGO_HOSTNAME}/${MONGO_DB}?retryWrites=true&w=majority&appName=Cluster0`
mongoose.connect(URI);



describe("Route Handlers",()=>{
    describe("POST /form", ()=>{
        test('Status code 200', async function(){
            const email = "foobar@fantasy.com";
            const text = "Great product! We are very happy with the product and its outstanding quality";
            const req = mockRequest({body:{email:email,text:text}});
            const res = mockResponse({status:200});
            await form(req,res);
            expect(res.status).toBe(200);
        })
    })
})