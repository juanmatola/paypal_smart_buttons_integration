export default class Arcticle{
    constructor(detail){
        this.name = detail.name;
        this.price = detail.price;
        this.path = `writable/plans/${this.name}.pdf`;
        this.isPayed = true;
    }
}