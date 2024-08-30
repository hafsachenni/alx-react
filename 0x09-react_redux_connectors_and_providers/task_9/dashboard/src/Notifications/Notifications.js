import React from "react";
import PropTypes from "prop-types";
import closeIcon from "../assets/close-icon.png";
import { StyleSheet, css } from "aphrodite";
import NotificationItem from "./NotificationItem";



const screenSize = {
  small: "@media screen and (max-width: 900px)",
};

const opacityKeyframes = {
  from: {
    opacity: 0.5,
  },
  to: {
    opacity: 1,
  },
};

const translateYKeyframes = {
  "0%": {
    transform: "translateY(0)",
  },
  "50%": {
    transform: "translateY(-5px)",
  },
  "75%": {
    transform: "translateY(5px)",
  },
  "100%": {
    transform: "translateY(0)",
  },
};

const borderKeyframes = {
  "0%": {
    border: `3px dashed deepSkyBlue`,
  },
  "100%": {
    border: `3px dashed #e01d3f`,
  },
};

const styles = StyleSheet.create({
  menuItem: {
    float: "right",
    backgroundColor: "#fff8f8",
    ":hover": {
      cursor: "pointer",
      animationName: [opacityKeyframes, translateYKeyframes],
      animationDuration: "1s, 0.5s",
      animationIterationCount: 3,
    },
  },
  menuItemPNoShow: {
    marginRight: "8px",
    display: "none",
  },
  menuItemPShow: {
    marginRight: "8px",
  },
  notifications: {
    float: "right",
    padding: "10px",
    animationName: [borderKeyframes],
    animationDuration: "0.8s",
    animationIterationCount: 1,
    marginBottom: "20px",
    animationFillMode: "forwards",
    ":hover": {
      border: `3px dashed deepSkyBlue`,
    },
    [screenSize.small]: {
      float: "none",
      border: "none",
      listStyle: "none",
      padding: 0,
      fontSize: "20px",
      ":hover": {
        border: "none",
      },
      position: "absolute",
      background: "white",
      height: "110vh",
      width: "100vw",
    },
  },
  notificationsButtonImage: {
    width: "10px",
  },
  notificationsP: {
    margin: 0,
    marginTop: "15px",
  },
  notificationsUL: {
    [screenSize.small]: {
      padding: 0,
    },
  },
});

function Notifications(props) {
  const {
    displayDrawer,
    listNotifications,
    handleDisplayDrawer,
    handleHideDrawer,
    markNotificationAsRead,
    setNotificationFilter,
  } = props;

  const menuPStyle = css(
    displayDrawer ? styles.menuItemPNoShow : styles.menuItemPShow
  );

  return (
    <>
      <div className={css(styles.menuItem)} id="menuItem" onClick={handleDisplayDrawer}>
        <p className={menuPStyle}>Your notifications</p>
      </div>
      {displayDrawer && (
        <div className={css(styles.notifications)} id="Notifications">
          <button
            style={{
              background: "transparent",
              border: "none",
              position: "absolute",
              right: 20,
            }}
            aria-label="close"
            onClick={handleHideDrawer}
            id="closeNotifications"
          >
            <img
              src={closeIcon}
              alt="close-icon"
              className={css(styles.notificationsButtonImage)}
            />
          </button>
          <p className={css(styles.notificationsP)}>
            Here is the list of notifications
          </p>
          <button
            type="button"
            className={css(styles.filterButton)}
            id="buttonFilterUrgent"
            onClick={() => setNotificationFilter("URGENT")}
          >
            ❗❗
          </button>
          <button
            type="button"
            className={css(styles.filterButton)}
            id="buttonFilterDefault"
            onClick={() => setNotificationFilter("DEFAULT")}
          >
            💠
          </button>
          <ul className={css(styles.notificationsUL)}>
            {listNotifications.length === 0 && (
              <NotificationItem value="No new notification for now" />
            )}
            {listNotifications.map((notification) => (
              <NotificationItem
                key={notification.id}
                id={notification.id}
                type={notification.type}
                value={notification.value}
                html={notification.html}
                markAsRead={() => markNotificationAsRead(notification.id)}
              />
            ))}
          </ul>
        </div>
      )}
    </>
  );
};

Notifications.defaultProps = {
  displayDrawer: false,
  listNotifications: null,
  handleDisplayDrawer: () => {},
  handleHideDrawer: () => {},
  markNotificationAsRead: () => {},
  fetchNotifications: () => {},
  setNotificationFilter: () => {},
};

Notifications.propTypes = {
  displayDrawer: PropTypes.bool,
  listNotifications: PropTypes.object,
  handleDisplayDrawer: PropTypes.func,
  handleHideDrawer: PropTypes.func,
  markNotificationAsRead: PropTypes.func,
  setNotificationFilter: PropTypes.func,
};

export default Notifications;
