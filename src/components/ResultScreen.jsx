import React,{Component} from 'react';

export default class ResultScreen extends Component {
  constructor(props){
  	super(props);
  	this.state = {};
  }
  render() {
      return (
          <div className="result-screen bg-dark text-white-50 row">
            <div className="col-lg-12 screen">
              <div className="float small">{this.props.computeData.length > 0
                ? this.props.computeData.map(val => val)
                : null}</div>
              <div className="float bot-screen">{this.props.resultData.length > 0
                ? this.props.resultData.map(val => val)
                : 0}</div>
            </div>
          </div>
      );
  }
}
