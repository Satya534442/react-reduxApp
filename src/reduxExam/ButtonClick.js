import { connect } from 'react-redux';
import PButton from './PButton.jsx';

const mapStateToProps = (state, ownProps) => ({
  buttonText: ownProps.buttonText
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  onClick: () => dispatch({type:ownProps.clicks})
});

export default connect(mapStateToProps, mapDispatchToProps)(PButton);
