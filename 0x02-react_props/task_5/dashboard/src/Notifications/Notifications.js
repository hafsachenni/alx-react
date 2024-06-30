import React from 'react';
import PropTypes from 'prop-types';
import NotificationItem from './NotificationItem'; 
import closeIcon from '../assets/close-icon.png'; 
import { getLatestNotification } from '../utils/utils';

function Notifications({ displayDrawer }) {
  return (
    <div>
      <div className='menuItem'>
        <p>Your notifications</p>
      </div>

      {displayDrawer && (
        <div className="Notifications">
          <p>Here is the list of notifications</p>
          <ul>
            <NotificationItem type='default' value='New course available' />
            <NotificationItem type='urgent' value='New resume available' />
            <NotificationItem type='urgent' html={{ __html: getLatestNotification() }} style={{ color: 'red' }}/>
          </ul>
          <button aria-label="Close" style={{ position: 'absolute', right: '16px', top:"16px", cursor: 'pointer', border: 0, zIndex: 1}} onClick={() => console.log('Close button has been clicked')}>
            <img src={closeIcon} alt="icon" style={{ width: '8px', height: '8px' }} />
          </button>
        </div>
      )}
    </div>
  );
}


Notifications.defaultProps = {
  displayDrawer: false,
};

Notifications.propTypes = {
  displayDrawer: PropTypes.bool,
};

export default Notifications;
