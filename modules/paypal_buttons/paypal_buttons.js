export default function initPayPalButtons(buttonsIds) {

    //Obtengo botones del dom
    let buttons = {
      0 : document.getElementById(buttonsIds[0]),
      1 : document.getElementById(buttonsIds[1]),
      2 : document.getElementById(buttonsIds[2]),
    };

    //BUTTON 1
    paypal.Buttons({
      style: {
        shape: 'pill',
        color: 'gold',
        layout: 'vertical',
        label: 'buynow',
      },

      createOrder: function(data, actions) {
        return actions.order.create({
          purchase_units: [{"amount":{"currency_code":"EUR","value":30}}]
        });
      },

      onApprove: function(data, actions) {
        return actions.order.capture().then(function(details) {

        // Disparo evento de confirmacion de pago
          buttons[0].dispatchEvent(
            new CustomEvent('onapprove', {
              detail:{
                'name' : details.payer.name.given_name,
                'email': details.payer.email_address,
              }
            })
          );

        });
      },

      onError: function(err) {
        console.log(err);
      }
    }).render('#'+buttonsIds[0]);
    
    //BUTTON 2
    paypal.Buttons({
      style: {
        shape: 'pill',
        color: 'gold',
        layout: 'vertical',
        label: 'buynow',
      },

      createOrder: function(data, actions) {
        return actions.order.create({
          purchase_units: [{"amount":{"currency_code":"EUR","value":30}}]
        });
      },

      onApprove: function(data, actions) {
        return actions.order.capture().then(function(details) {
          // Disparo evento de confirmacion de pago
          buttons[1].dispatchEvent(
            new CustomEvent('onapprove', {
              detail:{
                'name' : details.payer.name.given_name,
                'email': details.payer.email_address,
              }
            })
          );

        });
      },

      onError: function(err) {
        console.log(err);
      }
    }).render('#'+buttonsIds[1]);
    
    //BUTTON 3
    paypal.Buttons({
      style: {
        shape: 'pill',
        color: 'gold',
        layout: 'vertical',
        label: 'buynow',
      },

      createOrder: function(data, actions) {
        return actions.order.create({
          purchase_units: [{"amount":{"currency_code":"EUR","value":30}}]
        });
      },

      onApprove: function(data, actions) {
        return actions.order.capture().then(function(details) {
          // Disparo evento de confirmacion de pago
          buttons[2].dispatchEvent(
            new CustomEvent('onapprove', {
              detail:{
                'name' : details.payer.name.given_name,
                'email': details.payer.email_address,
              }
            })
          );
        });
      },

      onError: function(err) {
        console.log(err);
      }
    }).render('#'+buttonsIds[2]);

}