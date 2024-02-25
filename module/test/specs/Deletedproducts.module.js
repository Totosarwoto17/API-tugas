//Ini adalah contoh api automation menggunakan ES module js
import request from "supertest";
import { expect } from "chai";
import { createTokenKasiraja } from "../function/CreatetokenKasiraja.spec.js";
import { getProductId } from "../function/getProduct.spec.js";
const authToken = await createTokenKasiraja()
const id = await getProductId()
const ProductId = (await id).body.data.products[0].id


const baseUrl = "https://kasir-api.belajarqa.com";

describe("Deleted  Product Scenario", () =>{
    it("Positive - Deleted  Product", async () =>{
        const payload = {
               "category_id" : `${ProductId }`,
                "code": "AQUA123",
                "name": "Luwak With Coffe",
                "price": "3500",
                "cost": "3000",
                "stock": "1"
             
        }
        //send request
        const response = await request (baseUrl)
            .delete(`/products/${ProductId }`) 
            .send(payload)  //request body
            .set("Content-Type","application/json")  //header
            .set("Authorization", `Bearer ${authToken}`);
        expect((await response).status).to.equal(200)
        expect(response.body.status).to.equal('success');
        expect(response.body.message).to.equal('Product berhasil dihapus');
    })

   



})


