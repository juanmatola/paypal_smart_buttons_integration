export default class Arcticle{
    constructor(name){
        this.name = name;
        this.path = `writable/plans/${this.name}.pdf`;
        this.isPayed = true;
    }

    sendTo(buyer){
        console.log('\n--------------------------------------\n');
        console.log(`Se envió el archivo... ${this.name} \n\nDetalles:\ndestinatario: ${buyer.name}\nemail: ${buyer.email}`);
        console.log('\n--------------------------------------\n');

        //fetch(); peticion a controlador para realizar envio de articulo
    }
}
