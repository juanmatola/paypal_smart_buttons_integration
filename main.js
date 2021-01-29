import Sale from './modules/sale/main.js';
import initPayPalButtons from './modules/paypal_buttons/paypal_buttons.js';

let buttonsIds = ['paypal-button-1', 'paypal-button-2', 'paypal-button-3']; 

initPayPalButtons(buttonsIds);

let paypalButton1 = document.getElementById('paypal-button-1');
let paypalButton2 = document.getElementById('paypal-button-2');
let paypalButton3 = document.getElementById('paypal-button-3');

paypalButton1.addEventListener('onapprove', (pay) =>{
    let sale = new Sale('plan1', pay.detail);
    sale.send();
})

paypalButton2.addEventListener('onapprove', (pay) =>{
    let sale = new Sale('plan2', pay.detail);
    sale.send();
})

paypalButton3.addEventListener('onapprove', (pay) =>{
    let sale = new Sale('plan3', pay.detail);
    sale.send();
})