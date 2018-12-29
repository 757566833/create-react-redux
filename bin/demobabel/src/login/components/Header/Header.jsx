import Header_cmpt  from './Header_cmpt.jsx';
import PropTypes from 'prop-types';
import mapStateToProps from './mapStateToProps.jsx';
import mapDispatchToProps from './mapDispatchToProps.jsx';
import { connect } from 'react-redux';

Header_cmpt.propTypes = {
    username:PropTypes.string.isRequired,
    password:PropTypes.string.isRequired,

};
const Header = connect(
    mapStateToProps,
    mapDispatchToProps
)(Header_cmpt);
export default Header;