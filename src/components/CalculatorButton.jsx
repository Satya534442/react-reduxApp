import React,{Component} from 'react';

export default class CalculatorButton extends Component {
    constructor(props){
    	super(props);
    	this.state = {};
    }
    render() {
        return (
            <div className="row">
                {Array.from(Array(10).keys()).reverse().map((key, i) =>
                   <div className="column col-lg-4"><button type="button"
                    className="btn btn-light btn-lg  btn-block"
                    onClick={this.props.bindButton} id={`button-${i}`}
                      key={`button-${i}`}>
                    {key}
                   </button></div>
                )}
                <div className="column col-lg-4"><button type="button"
                 className="btn btn-light btn-lg  btn-block"
                 onClick={this.props.bindButton}>
                 .
                </button></div><div className="column col-lg-4"><button type="button"
                 className="btn btn-light btn-lg  btn-block"
                 onClick={this.props.bindButton}>
                 00
                </button></div>
            </div>
        );
    }
}
