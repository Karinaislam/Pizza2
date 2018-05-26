import React, { Component } from 'react';
import './Cheese.css';
class Cheese extends Component {

    // amountOfCheese(amount){
    //     this.setState({amount : amount})
    // }

    render() {
        return (
            <div>
                 <p className="cheese_header">Cheese</p>
                <form>
                    <label><input type="radio" value="option1" name="cheese" onChange={(value)=>{this.props.onCheeseChange('cheese','Yse')}} />Yse</label>
                    <label><input type="radio" value="option2" name="cheese" onChange={(value)=>{this.props.onCheeseChange('cheese','No')}}/>No</label>
                    
                </form>

                <form>
                    <label><input type="radio" value="option1" name="quantity" onChange={(value)=> {this.props.onCheeseChange('Extra')}} /> Extra</label>
                    <label><input type="radio" value="option2" name="quantity" onChange={(value)=> {this.props.onCheeseChange('Regular')}}/>Regular</label>
                    <label><input type="radio" value="option3" name="quantity" onChange={(value)=> {this.props.onCheeseChange('Light')}} />Light</label>
                    <label><input type="radio" value="option4" name="quantity" onChange={(value)=> {this.props.onCheeseChange('None')}} />None</label>
                </form>

                <p>Cheese: {this.props.showCheese}   </p>
              <p> Amount of Cheese: {this.props.showQuantity} </p> 
            </div>
        );
    }
}

export default Cheese;