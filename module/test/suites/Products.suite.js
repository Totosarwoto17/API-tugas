
import { expect } from "chai";
import { CreateProduct } from "../function/Createproduct.spec.js";
import { getProductId } from "../function/getProduct.spec.js";
import { UpdateProduct } from "../function/UpdateProduct.spec.js";


describe("End To End - Product", () =>{
    it('Success Create Product', async () => {
        const response = await CreateProduct()
        expect((await response).status).to.equal(201)
    })

    it('Success Get product', async () => {
        const response = await getProductId()
        expect((await response).status).to.equal(200)

    })

    it('Success Update product', async () => {
        const response = await UpdateProduct()
        expect((await response).status).to.equal(200)
    })
})