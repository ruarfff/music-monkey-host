import {connect} from 'react-redux';
import Home from './Home';

const mapStateToProps =(state) => ({auth: state.auth});

const mapDispatchToProps = ({});

const HomeContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);

export default HomeContainer;