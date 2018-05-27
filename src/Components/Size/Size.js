import React, { Component } from 'react';
import "./Size.css";
class Size extends Component {
  


    render() {
        return (
            <div id="size">
                <div>
                    <div onClick={(value) => this.props.onSizeChange('size',10)} className="pizza10">10"</div>
                    <div onClick={(value) => this.props.onSizeChange('size',12)} className="pizza12">12"</div>
                    <div onClick={(value) => this.props.onSizeChange('size',14)} className="pizza14">14"</div>
                    <div onClick={(value) => this.props.onSizeChange('size',16)} className="pizza16">16"</div>
                </div>
                <p>Selected Size: {this.props.showSize}</p>
            </div>
        );
    }
}

export default Size;