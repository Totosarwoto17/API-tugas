import request from "supertest";
import { baseUrl } from "../../data/config.js";


export async function createTokenKasiraja(){
    const payload = {
        "email" : "Max@gmail.com",
        "password" : "1717abc"
    }
    //send request
    const response = await request (baseUrl)
        .post("/authentications") //endpoint
        .send(payload)  //request body
        .set("Content-Type","application/json")  //header
    
    const token = (await response).body.data.accessToken
    return token
}