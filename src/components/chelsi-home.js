import React, {Component} from 'react';


export default class Home extends Component {
    render() {
        return(
            <div className="home">
                <h1>Pepés Pizza</h1>
                <h2>Old world flavors at your fingertips</h2>
                <img className="home-header" src='../../static/assets/images/backgrounds/oven.jpg'></img>
                <div className="navbar">
                    <a href="">About Us</a>
                        <div className="nowiggles">
                            <button className="place-order">Place Order</button>
                        </div>
                    <a href="">Login</a>
                </div>
                <div className="carousel-wrapper">
                    <i className="fas fa-chevron-left"></i>
                    <div>
                        <img className="home-header" src='assets/images/pizzas/cheesepizza.jpeg'></img>
                        <img className="home-header" src='assets/images/pizzas/individualpizza.jpeg'></img>
                        <img className="home-header" src='assets/images/pizzas/tomatoepizza.jpeg'></img>
                    </div>
                    <i className="fas fa-chevron-right"></i>
                </div>
                <div className="googlereviews">
                    <img className="google-5-star" src='assets/images/google-five-stars.png'></img>
                </div>
                <div className="socialmedia">
                    <i className="fab fa-facebook-square"></i>
                    <i className="fab fa-instagram"></i>
                    <i className="fab fa-pinterest"></i>
                </div>
                <h3>
                    <i class="far fa-copyright"></i> 2019 PepesPizza All Rights Reserved
                </h3>

            </div>
        );
    }
}