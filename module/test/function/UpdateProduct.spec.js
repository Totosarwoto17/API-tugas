import request from "supertest";
import { baseUrl } from "../../data/config.js";
import { getProductId } from "./getProduct.spec.js";
import { createTokenKasiraja } from "./CreatetokenKasiraja.spec.js";

export async function UpdateProduct(){
    const authToken = await createTokenKasiraja()
    const getid = await getProductId();
    const ProductId = (await getid).body.data.products[0].id
    const payload = {
        "category_id" : ProductId,
        "code": "A314ASDDFIKopiko",
        "name": "KOPIKO1",
        "price": "4500",
        "cost": "3000",
        "stock": "5"
    }
    //send request
    const response = await request (baseUrl)
        .put(`/products/${ProductId}`) //endpoint
        .send(payload)  //request body
        .set("Content-Type","application/json")  //header
        .set("Authorization", `Bearer ${authToken}`);
        return (response)

}

