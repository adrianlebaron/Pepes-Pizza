import React, {Component} from 'react';


import ovens from '../../static/assets/images/backgrounds/oven.jpg';


export default class Home extends Component {
    render() {
        return(
            <div className="home">
                <h1>Pepés Pizza</h1>
                <h2>Old world flavors at your fingertips</h2>
                <img className="home-header" src={ovens}></img>
                <div className="navbar">
                    <a href="">About Us</a>
                    <button className="place-order">Place Order</button>
                    <a href="">Login</a>
                </div>
                <div className="picture-slide">
                    
                </div>


            </div>
        );
    }
}