import React,{Component} from 'react';

export default class CalculatorComputation extends Component {
    constructor(props){
    	super(props);
    	this.state = {
        symbols: [{
          val: "/",
          type: "DIV"
        },{
          val: "-",
          type: "SUB"
        },{
          val: "+",
          type: "ADD"
        },{
          val: "X",
          type: "MULT"
        },{
          val: "=",
          type: "EQ"
        }]
      };
    }
    render() {
        return (
            <div className="cal-compute">
                {this.state.symbols.map((obj, i) =>
                  <div className="">
                    <button type="button" className="com-btn btn-block btn btn-danger btn-lg"
                      id={`com-button-${i}`} onClick={this.props.bindButton}
                      key={`com-button-${i}`}>
                      {obj.val}
                    </button>
                  </div>
                )}
            </div>
        );
    }
}
