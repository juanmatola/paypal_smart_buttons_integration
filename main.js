import Arcticle from './modules/arcticle_module.js';
import initPayPalButtons from './modules/paypal_buttons/paypal_buttons.js';
function sale(plan, buyer) {
    console.log(`Payment received correctly.`);
    
    let arcticle = new Arcticle(plan);
    let res = arcticle.sendTo(buyer);
    console.log(`Sending request.`);

    console.log(res);
}

let buttonsIds = ['paypal-button-1', 'paypal-button-2', 'paypal-button-3']; 

initPayPalButtons(buttonsIds);

let paypalButton1 = document.getElementById('paypal-button-1');
let paypalButton2 = document.getElementById('paypal-button-2');
let paypalButton3 = document.getElementById('paypal-button-3');

paypalButton1.addEventListener('onapprove', (pay) =>{
    sale('plan1', pay.detail);
})

paypalButton2.addEventListener('onapprove', (pay) =>{
    sale('plan2', pay.detail);
})

paypalButton3.addEventListener('onapprove', (pay) =>{
    sale('plan3', pay.detail);
})