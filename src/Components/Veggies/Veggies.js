import React, { Component } from 'react';
import './Veggies.css';
class Veggies extends Component {
    render() {
        return (
            <div>
                 <p className="veggies_header">Veggies</p>
                <form>
                    <label><input type="checkbox" value="option1" name="veggies"  onChange={(e)=>{this.props.onMeatChange('veggies','Mushrooms' , e)}} />Mushrooms</label>
                    <label><input type="checkbox" value="option2" name="veggies"  onChange={(e)=>{this.props.onMeatChange('veggies','Onions' , e)}} />Onions</label>
                    <label><input type="checkbox" value="option3" name="veggies" onChange={(e)=>{this.props.onMeatChange('veggies','BellPepper' , e)}} />Bell peppers</label>
                    <label><input type="checkbox" value="option4" name="veggies"  onChange={(e)=>{this.props.onMeatChange('veggies','Olives' , e)}} />Olives</label>
                </form>
                <p>Selected Meat: {this.props.veggies.join(", ")}</p>
            </div>
        );
    }
}

export default Veggies;