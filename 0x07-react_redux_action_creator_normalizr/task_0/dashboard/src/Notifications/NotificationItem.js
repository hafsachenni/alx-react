import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from "aphrodite";

const styles = StyleSheet.create({
  notification: {
    cursor: 'pointer',
    borderRadius: '5px',
    width: '100%',
    fontSize: '20px',
    padding: '10px 8px',
    borderBottom: '1px solid black',
    boxSizing: 'border-box',
  },
  urgent: {
    color: 'red',
  },
  default: {
    color: 'blue',
  },
});

const NotificationItem = React.memo(({ type, html, id, value, markAsRead }) => {
  let li;

  if (value) {
    li = (
      <li
        className={css(styles.notification, type === 'urgent' && styles.urgent, type === 'default' && styles.default)}
        data-notification-type={type}
        onClick={() => markAsRead(id)}
      >
        {value}
      </li>
    );
  } else {
    li = (
      <li
        className={css(styles.notification, type === 'urgent' && styles.urgent, type === 'default' && styles.default)}
        data-notification-type={type}
        dangerouslySetInnerHTML={html}
        onClick={() => markAsRead(id)}
      ></li>
    );
  }

  return li;
});

NotificationItem.defaultProps = {
  type: 'default',
  value: '',
  html: {},
  markAsRead: () => {},
  id: NaN,
};

NotificationItem.propTypes = {
  type: PropTypes.string,
  value: PropTypes.string,
  html: PropTypes.shape({
    __html: PropTypes.string,
  }),
  markAsRead: PropTypes.func,
  id: PropTypes.number,
};

export default NotificationItem;
