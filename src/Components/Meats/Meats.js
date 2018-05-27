import React, { Component } from 'react';
import './Meats.css';
class Meats extends Component {

        
        
  

    render() {
    

        return (
            <div>
                 <p id="meats" className="meats_header">Meats</p>
                 <form>
                 <label><input type="checkbox" value="option1" name="Meats" onChange={(e)=>{this.props.onMeatChange('meats','Beef' , e)}} />Beef</label>
                 <label><input type="checkbox" value="option2" name="Meats" onChange={(e)=>{this.props.onMeatChange('meats','Chicken', e)}} />Chicken</label>  
                 <label><input type="checkbox" value="option3" name="Meats" onChange={(e)=>{this.props.onMeatChange('meats','Ham', e)}}/>Ham</label>
                 <label><input type="checkbox" value="option4" name="Meats" onChange={(e)=>{this.props.onMeatChange('meats','ItalianSausage', e)}} />Italian Sausage</label>
                 <label><input type="checkbox" value="option5" name="Meats" onChange={(e)=>{this.props.onMeatChange('meats','Meatball', e)}} />Meatball</label>
                <label><input type="checkbox" value="option6" name="Meats" onChange={(e)=>{this.props.onMeatChange('meats','Pepperoni', e)}} />Pepperoni</label>
                    
                   
                   
                    
                </form>
            <p>Selected Meat: {this.props.meats.join(", ")}</p>
            </div>
        );
    }
}

export default Meats;