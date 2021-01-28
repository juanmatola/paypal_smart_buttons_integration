import * as paypal from 'https://www.paypal.com/sdk/js?client-id=sb&currency=EUR';
import Arcticle from './modules/arcticle_module.js';
import initPayPalButtons from './modules/paypal_buttons/paypal_buttons.js';

let buttonsIds = ['paypal-button-1', 'paypal-button-2', 'paypal-button-3']; 

let prueba = initPayPalButtons(buttonsIds);

let paypalButton1 = document.getElementById('paypal-button-1');
let paypalButton2 = document.getElementById('paypal-button-2');
let paypalButton3 = document.getElementById('paypal-button-3');

paypalButton1.addEventListener('onapprove', (e) =>{
    let arcticle = new Arcticle('Plan 1', e.detail.name, e.detail.email);
    arcticle.send();
})

paypalButton2.addEventListener('onapprove', (e) =>{
    let arcticle = new Arcticle('Plan 2', e.detail.name, e.detail.email);
    arcticle.send();
})

paypalButton3.addEventListener('onapprove', (e) =>{
    let arcticle = new Arcticle('Plan 3', e.detail.name, e.detail.email);
    arcticle.send();
})
