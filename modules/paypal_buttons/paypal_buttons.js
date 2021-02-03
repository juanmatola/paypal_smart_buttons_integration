export default function initPayPalButtons(buttons_config) {

    for (const button in buttons_config) {
      if (Object.hasOwnProperty.call(buttons_config, button)) {
        const element = buttons_config[button];
          
        /* Paypal Button */

        paypal.Buttons({
          style: {
            shape: 'pill',
            color: 'gold',
            layout: 'vertical',
            label: 'buynow',
          },
    
          createOrder: function(data, actions) {
            return actions.order.create({
              purchase_units: [{
                "amount": { 
                            "currency_code": "EUR", 
                            "value": element.price
                          }}]
            });
          },
    
          onApprove: function(data, actions) {
            return actions.order.capture().then(function(details) {
    
            // Disparo evento de confirmacion de pago
              window.dispatchEvent(
                new CustomEvent('approved_pay', {
                  detail:{
                    'customer':{
                        'name' : details.payer.name.given_name,
                        'email': details.payer.email_address,
                    },
                    'arcticle': {
                        'name': element.name,
                        'price': element.price,
                    }
                  }
                })
              );
    
            });
          },
    
          onError: function(err) {
            console.log(err);
          }
        }).render(`#${element.id}`);

      }
    }
}