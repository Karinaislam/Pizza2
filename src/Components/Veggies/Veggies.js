import React, { Component } from 'react';
import './Veggies.css';
class Veggies extends Component {
    render() {
        return (
            <div>
                 <p className="veggies_header">Veggies</p>
                <form>
                    <label><input type="checkbox" value="option1" name="Veggies"  onChange={(e)=>{this.props.onMeatChange('Mushrooms' , e)}} />Mushrooms</label>
                    <label><input type="checkbox" value="option2" name="Veggies"  onChange={(e)=>{this.props.onMeatChange('Onions' , e)}} />Onions</label>
                    <label><input type="checkbox" value="option3" name="Veggies" onChange={(e)=>{this.props.onMeatChange('BellPepper' , e)}} />Bell peppers</label>
                    <label><input type="checkbox" value="option4" name="Veggies"  onChange={(e)=>{this.props.onMeatChange('Olives' , e)}} />Olives</label>
                </form>
            </div>
        );
    }
}

export default Veggies;