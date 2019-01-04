import React, {Component} from 'react';
import {CardElement, injectStripe} from 'react-stripe-elements';

class CheckoutForm extends Component {
  constructor(props) {
    super(props);
    this.state = {complete: false};
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.stripe.createToken({name: 'Name'}).then(({token}) => {
        console.log('Received Stripe token:', token);
        this.setState({complete: true});

    fetch("/charge", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: token.id
    }).then((res) => res.json())
    .then(response => {return response;})
    .catch((err) => console.log(err))
    });
  }
//   async submit(ev) {
//     let {token} = await this.props.stripe.createToken({name: "Name"});
//     let response = await fetch("/charge", {
//       method: "POST",
//       headers: {"Content-Type": "text/plain"},
//       body: token.id
//     });
  
//     if (response.ok) this.setState({complete: true});

// }

  render() {
    if (this.state.complete) return (
        <div>
            <h1>Purchase Complete!</h1>
            <h3>Your order will be ready in 15 min!</h3>
        </div>
    )
    
    return (
      <div className="checkout">
        <p>Would you like to complete the purchase?</p>
        <CardElement />
        <button onClick={this.handleSubmit}>Send</button>
      </div>
    );
  }
}

export default injectStripe(CheckoutForm);