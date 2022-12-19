import PropTypes from 'prop-types';
import Style from './Notification.module.css';

const Notification = ({ message }) => {
  return <p className={Style.message}>{message}</p>;
};

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};
export default Notification;
