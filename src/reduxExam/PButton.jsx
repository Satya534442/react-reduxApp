import React,{Component} from 'react';

export default class Button extends Component {

    render() {
        return (
            <div className="class-name">
                <button onClick={this.props.onCLick}>
                  {this.props.buttonText}
                </button>
            </div>
        );
    }
}
