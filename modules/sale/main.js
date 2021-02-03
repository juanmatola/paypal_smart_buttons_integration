import Arcticle from "./Arcticle.js";

export default class Sale{
    constructor(pay){
        this.arcticle = new Arcticle(pay.arcticle);
        this.customer = pay.customer;
        this.status = false;
    }

    send(){
        console.log(`Sending ${this.arcticle.name} to ${this.customer.name}`);
        console.log(`This resource is in: ${this.arcticle.path}`);

        //fetch(); fetch a controlador para realizar envio desde backend
    }
}