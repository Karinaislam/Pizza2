import React, { Component } from 'react';
import './Cheese.css';
class Cheese extends Component {

    constructor(props) {
        super(props);
        this.state ={

        }
    }
    
    handelChange(cheese){
        this.setState({cheese : cheese})
    }

    amountOfCheese(amount){
        this.setState({amount : amount})
    }

    render() {
        return (
            <div>
                 <p className="cheese_header">Cheese</p>
                <form>
                    <label><input type="radio" value="option1" name="Cheese" onChange={()=>{this.handelChange('Yse')}} />Yse</label>
                    <label><input type="radio" value="option2" name="Cheese" onChange={()=>{this.handelChange('No')}}/>No</label>
                    
                </form>

                <form>
                    <label><input type="radio" value="option1" name="Amaount" onChange={()=> {this.amountOfCheese('Extra')}} /> Extra</label>
                    <label><input type="radio" value="option2" name="Amaount" onChange={()=> {this.amountOfCheese('Regular')}}/>Regular</label>
                    <label><input type="radio" value="option3" name="Amaount" onChange={()=> {this.amountOfCheese('Light')}} />Light</label>
                    <label><input type="radio" value="option4" name="Amaount" onChange={()=> {this.amountOfCheese('None')}} />None</label>
                </form>

                <p>Cheese: {this.state.cheese}   </p>
                <p> Amount of Cheese: {this.state.amount} </p>
            </div>
        );
    }
}

export default Cheese;