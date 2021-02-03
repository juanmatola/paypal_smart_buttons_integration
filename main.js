import Sale from './modules/sale/main.js';
import initPayPalButtons from './modules/paypal_buttons/paypal_buttons.js';

/* -- Config -- */
const buttons_config = {
    button1: { id: 'paypal-button-1' , name: 'hypertrophy' , price: 10},
    button2: { id: 'paypal-button-2' , name: 'fullbody' , price: 20},
    button3: { id: 'paypal-button-3' , name: 'split' , price: 30},
    button4: { id: 'paypal-button-4' , name: 'bodyweight' , price: 40},
    button5: { id: 'paypal-button-5' , name: 'cardio' , price: 50},
}
/* -- Config -- */


initPayPalButtons(buttons_config);

window.addEventListener('approved_pay', (pay) => {
    let sale = new Sale(pay.detail);
    sale.send();
})
