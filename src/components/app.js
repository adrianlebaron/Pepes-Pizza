import React, {Component} from 'react';
import {Elements, StripeProvider} from 'react-stripe-elements';
import CheckoutForm from './checkout-form';

class App extends Component {
  render() {
    return (
      <StripeProvider apiKey="pk_test_12345">
        <div className="example">
          <h1>Pepes Pizza!</h1>
          <Elements>
            <CheckoutForm />
          </Elements>
        </div>
      </StripeProvider>
    );
  }
}

export default App;
