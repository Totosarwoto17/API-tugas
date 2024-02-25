import request from "supertest";
import { expect } from "chai";
import { createTokenKasiraja } from "../function/CreatetokenKasiraja.spec.js";

const baseUrl = "https://kasir-api.belajarqa.com";

describe("Get Token Scenario", () =>{
    let token;
    it("Positive - Success Get Token", async () =>{
        const payload = {
            "email" : "Max@gmail.com",
            "password" : "1717abc"
        }
        //send request
        const response = await request (baseUrl)
            .post("/authentications") //endpoint
            .send(payload)  //request body
            .set("Content-Type","application/json")  //header
        
        expect((await response).status).to.equal(201)
        token = (await response).body.data.accessToken
        console.log(await token)
    })


    it("Import token", async () => {
        const token = await createTokenKasiraja()
        console.log(await token)
    })


})


