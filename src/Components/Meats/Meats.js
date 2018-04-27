import React, { Component } from 'react';
import './Meats.css';
class Meats extends Component {

        
        
  

    render() {
    

        return (
            <div>
                 <p className="meats_header">Meats</p>
                 <form>
                 <label><input type="checkbox" value="option1" name="Meats" onChange={(e)=>{this.props.onMeatChange('Beef' , e)}} />Beef</label>
                 <label><input type="checkbox" value="option2" name="Meats" onChange={(e)=>{this.props.onMeatChange('Chicken', e)}} />Chicken</label>  
                 <label><input type="checkbox" value="option3" name="Meats" onChange={(e)=>{this.props.onMeatChange('Ham', e)}}/>Ham</label>
                 <label><input type="checkbox" value="option4" name="Meats" onChange={(e)=>{this.props.onMeatChange('ItalianSausage', e)}} />Italian Sausage</label>
                 <label><input type="checkbox" value="option5" name="Meats" onChange={(e)=>{this.props.onMeatChange('Meatball', e)}} />Meatball</label>
                <label><input type="checkbox" value="option6" name="Meats" onChange={(e)=>{this.props.onMeatChange('Pepperoni', e)}} />Pepperoni</label>
                    
                   
                   
                    
                </form>
            <p>Selected Meat: {this.props.meats}</p>
            </div>
        );
    }
}

export default Meats;