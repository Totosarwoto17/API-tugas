//Ini adalah contoh api automation menggunakan ES module js
import request from "supertest";
import { expect } from "chai";
import { createTokenKasiraja } from "../function/CreatetokenKasiraja.spec.js";

const baseUrl = "https://kasir-api.belajarqa.com";
const authToken = await createTokenKasiraja()



describe("Get All List Productg", () => {
    it('Positive - success get List Product', async () => {
        let response = await request(baseUrl) //base url
            .get("/products") //endpoint
            .set("Authorization", `Bearer ${authToken}`);
            expect((await response).status).to.equal(200)
    })

    it('Positive - success get  response contain body string', async () => {
        let response = await request(baseUrl) //base url
        .get("/products") //endpoint
        .set("Authorization", `Bearer ${authToken}`);
        expect(response.text).to.include("id");
        expect(response.text).to.include("code");
        expect(response.text).to.include("price");
        expect(response.text).to.include("cost");
    })

    it('Validate Check if any product has price less than or equal to cost', async () => {
        let response = await request(baseUrl) //base url
        .get("/products") //endpoint
        .set("Authorization", `Bearer ${authToken}`);
        const products = response.body.data.products;
        // Memeriksa apakah setiap produk memiliki harga (price) lebih besar dari biaya (cost)
        products.forEach((product) => {
            expect(product.price).to.be.above(product.cost);
            expect(product.price).not.to.be.below(product.cost + 1);
        });
    })

    it('Positive - success get product id', async () => {
        let response = await request(baseUrl) //base url
        .get(`/products`) 
        .set("Authorization", `Bearer ${authToken}`);
        expect((await response).status).to.equal(200)
        const id = (await response).body.data.products[0].id;
        console.log(id)
        return id


    })



})
