import React, { Component } from 'react';
import Navbar from '../Navbar/Navbar';
import Size from '../Size/Size';
import Crust from '../Crust/Crust';
import Sauce from '../Sauce/Sauce';
import Cheese from '../Cheese/Cheese';
import Meats from '../Meats/Meats';
import Veggies from '../Veggies/Veggies';
import Order from '../Order/Order';
import Header from '../Header/Header';
import Pizza from '../Pizza/Pizza';
class Home extends Component {
constructor(props) {
    super(props);
    this.handelChecked = this.handelChecked.bind(this);
    this.state={
        meats:[]
        
    }
}

  handelChecked(meat , e){
      const currentMeats =this.state.meats;
      let newMeats;
    //   this.setState ({meats : meat})

      if (e.target.checked == true){
          newMeats=[...currentMeats,meat];  // copy & add
      }
      else {
        newMeats= currentMeats.filter(item=>item != meat);
      }

      this.setState({meats: newMeats});
     
    }

    render() {
        return (
            <div>
                <Header/>
                <Navbar/>
                <Pizza meats = {this.state.meats}/>
                <Size/>
                <Crust/>
                <Sauce/>
                <Cheese/>
                <Meats onMeatChange={this.handelChecked}/>
                <Veggies onMeatChange={this.handelChecked}/>
                <Order/>
                
            </div>
        );
    }
}

export default Home;