export default class Arcticle{
    constructor(name, clientName, clientEmail){
        this.name = name;
        this.clientName = clientName;
        this.clientEmail = clientEmail;
        this.isPayed = false;
    }

    info(){
        console.log('MENSAJE DESDE EL MODULO DE ARTICULO');
        console.log('Arcticle name: ' + this.name);
        console.log('Client name: ' + this.clientName);
        console.log('Client email: ' + this.clientName);
    }

    send(){
        console.log('--------------------------------------');
        console.log('Enviando el archivo... ' + this.name + ' \n\nDetalles:\ndestinatario: '+this.clientName+'\nemail: '+this.clientEmail);
    }
}