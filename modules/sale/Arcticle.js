export default class Arcticle{
    constructor(name){
        this.name = name;
        this.path = `writable/plans/${this.name}.pdf`;
        this.isPayed = true;
    }
}
