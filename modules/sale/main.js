import Arcticle from "./Arcticle.js";

export default class Sale{
    constructor(plan, buyer){
        this.arcticle = new Arcticle(plan);
        this.buyer = buyer;
        this.status = false;
    }

    send(){
        console.log(`Sending ${this.arcticle.name} to ${this.buyer.name}`);
        console.log(`This resource is in: ${this.arcticle.path}`);

        //fetch(); fetch a controlador para realizar envio desde backend
    }
}