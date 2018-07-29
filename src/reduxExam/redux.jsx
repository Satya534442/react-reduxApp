import React,{Component} from 'react';
import ButtonClick from './ButtonClick.js';

export default class ReduxTutorial extends Component {
   constructor(props){
   	super(props);
   	this.state = {
      showText: "Please Click on any of the buttons to change the field text."
    };
   }
    render() {
        return (
            <div className="class-name">
                <h1>React-Redux Example</h1>
                <ButtonClick clicks="HELLO" buttonText="Say Hello" />
                <ButtonClick clicks="BYE" buttonText="Say Bye"/>
                <ButtonClick clicks="MEAN" buttonText="Say Mean"/>
                <ButtonClick clicks="LOVE" buttonText="Show Love"/>
                <div>{this.state.showText}</div>
            </div>
        );
    }
}
