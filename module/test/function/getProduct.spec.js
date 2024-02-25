import request from "supertest";
import { baseUrl } from "../../data/config.js";
import { createTokenKasiraja } from "./CreatetokenKasiraja.spec.js";

export async function getProductId(){
    const authToken = await createTokenKasiraja()
    let response = await request(baseUrl) //base url
        .get(`/products`) 
        .set("Authorization", `Bearer ${authToken}`);
        return response
}

