import React, { Component } from 'react';

export default class Counter extends Component {
    static defaultProps = {
        step: 1,
        initialValue: 0,
      };

      state = {
        value: this.props.initialValue,
      }


      handleIncrement = () => {
        this.setState((state, props) => ({value : state.value + props.step }))
        console.log(this.state.value);
        
    }

     handleDecrement =() => {
        this.setState((state, props) => ({value : state.value - props.step }))
        console.log(this.state.value);
     }

      render(){
        const {step} = this.props;
      

        return (
            <div>
            <button type="button" 
            onClick={this.handleIncrement}
            >Increment by {step}</button>
            <span>{this.state.value}</span>
            <button type="button"
            onClick={this.handleDecrement}
            >Decrement by {step}</button>
          </div>
        )

      }

    
}