import React, { Component } from 'react';
import './Order.css';
class Order extends Component {
    render() {
        return (
            <div>
                <div className="order">
                <button onclick="activateLasers()">Add to Order </button>
                <button onclick="activateLasers()">Create Another Pizza </button>
                </div>           
            </div>
        );
    }
}

export default Order;