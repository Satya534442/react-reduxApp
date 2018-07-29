import React,{Component} from 'react';
import ResultScreen from '../components/ResultScreen.jsx';
import CalculatorButton from '../components/CalculatorButton.jsx';
import Computation from '../components/CalculatorComputation.jsx';
export default class Input extends Component {
    constructor(props){
    	super(props);
    	this.state = {
        enteredData: [],
        computeData: []
      };
      this.bindNumericButton = this.bindNumericButton.bind(this);
      this.bindComputationButton = this.bindComputationButton.bind(this);
    }
    bindNumericButton(ev) {
      const { enteredData, computeData } = this.state;
      if(computeData.length > 0) {
        this.setState({enteredData:[...enteredData, ev.target.innerHTML],
          computeData: [...computeData, ev.target.innerHTML]});
      }
      else {
        this.setState({enteredData:[...enteredData, ev.target.innerHTML]});
      }
    }
    bindComputationButton(ev) {
      const { enteredData, computeData } = this.state;
      if(ev.target.innerHTML.toString() === '=' && enteredData.length>0){
        const value = eval(computeData.join(''));
        this.setState({enteredData:[value], computeData:[]})
      }
      else{
        if(ev.target.innerHTML.toString() === '=') return;
        else if(ev.target.innerHTML === 'X') {
          if(computeData.length<1){
            this.setState({computeData:[...computeData, ...enteredData, '*'],
              enteredData:[]});
          }
          else {
            this.setState({computeData:[...computeData, '*'],
              enteredData:[]});
          }
        }
        else if(computeData.length<1) {
          this.setState({computeData:[...computeData, ...enteredData,
           ev.target.innerHTML], enteredData:[]});
         }
        else this.setState({computeData:[...computeData,
           ev.target.innerHTML], enteredData:[]});
      }
    }
    render() {
        return (
            <div className="container">
              <ResultScreen resultData={this.state.enteredData}
               computeData={this.state.computeData} />
               <div className="row">
                  <div className="column col-lg-9">
                    <div className="">
                      <button type="button" className="btn btn-light btn-lg btn-block"
                        onClick={()=>this.setState({enteredData:[], computeData:[]})}>
                        Clear
                      </button>
                    </div>
                    <CalculatorButton bindButton={this.bindNumericButton} />
                  </div>
                  <div className="column col-lg-3">
                    <Computation bindButton={this.bindComputationButton} />
                  </div>
               </div>
            </div>
        );
    }
}
