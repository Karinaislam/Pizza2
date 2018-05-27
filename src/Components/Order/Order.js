import React, { Component } from 'react';
import './Order.css';
import {Link } from "react-router-dom";

class Order extends Component {
    render() {
        return (
            <div>
                <div className="order">
                <Link to="/orderSummary">
                <button>Add to Order </button>
                </Link>
                <button>Create Another Pizza </button>
                </div>
                           
            </div>
        );
    }
}

export default Order;