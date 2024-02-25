import request from "supertest";
import { baseUrl } from "../../data/config.js";
import { createTokenKasiraja } from "./CreatetokenKasiraja.spec.js";

export async function CreateProduct(){
    const authToken = await createTokenKasiraja()
    const payload = {
        "category_id" : "811f547e-a24e-4f94-bfe1-b7ed7d11c03f",
        "code": "A314ASDDFIKopiko",
        "name": "KOPIKO",
        "price": "4500",
        "cost": "3000",
        "stock": "5"
    }
    //send request
    const response = await request (baseUrl)
        .post("/products") //endpoint
        .send(payload)  //request body
        .set("Content-Type","application/json")  //header
        .set("Authorization", `Bearer ${authToken}`);
        return (await response)

}
