
import React, {Component} from 'react';
import {Elements, StripeProvider} from 'react-stripe-elements';
import CheckoutForm from './checkout-form';
import Home from './chelsi-home';
// import About from './about';
import SignIn from './auth/signin';
import SignUp from './auth/signup';


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
