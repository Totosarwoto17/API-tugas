//Ini adalah contoh api automation menggunakan ES module js
import request from "supertest";
import { expect } from "chai";
import { createTokenKasiraja } from "../function/CreatetokenKasiraja.spec.js";
const authToken = await createTokenKasiraja()


const baseUrl = "https://kasir-api.belajarqa.com";

describe("Create Product Scenario", () =>{
    it("Positive - Success Create Product", async () =>{
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
        expect((await response).status).to.equal(201)
        expect(response.body.status).to.equal('success');
        expect(response.body.message).to.equal('Product berhasil ditambahkan');
    })


    it('negative case Product Id is null', async () => {
        const newProduct = {
            name: 'PERMEN',
            price: 100,
            cost: 80
        };
    
        const response = await request(baseUrl)
            .post("/products")
            .send(newProduct)
            .set("Authorization", `Bearer ${authToken}`);
    
        expect(response.status).to.equal(400);
        expect(response.body.status).to.equal('fail');
        expect(response.body.message).to.contain('is required');

    });





})


