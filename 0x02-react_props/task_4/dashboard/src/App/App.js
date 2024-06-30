import Notifications from '../Notifications/Notifications';
import Login from './Login/Login';
import Footer from './Footer/Footer';
import Header from './Header/Header';
import PropTypes from 'prop-types';
import CourseList from '../CourseList/CourseList';

function App( { isLoggedIn }) {
  let component = undefined;
  isLoggedIn ? (component = <CourseList />) : (component = <Login />);
  return (
    <>
      <Notifications/>
      <Header />
      {component}
      <Footer />
    </>
  );
}
// Defining  default props
App.defaultProps = {
  isLoggedIn: false,
};

// Defining  prop types
App.propTypes = {
  isLoggedIn: PropTypes.bool,
};
export default App;
