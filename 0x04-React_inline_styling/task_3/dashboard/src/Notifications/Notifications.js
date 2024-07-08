import React, { Component } from "react";
import NotificationItem from "./NotificationItem";
import PropTypes from "prop-types";
import NotificationItemShape from "./NotificationItemShape";
import closeIcon from "../assets/close-icon.png";
import { StyleSheet, css } from "aphrodite";


const styles = StyleSheet.create({
  menuItem: {
    textAlign: "right",
  },

  notifications: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(255, 255, 255, 0.9)", 
    zIndex: 999, 
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: 0, 
    margin: 0, 
    fontSize: "20px", 
  },

  notificationsButtonImage: {
    width: "10px",
  },

  notificationsContent: {
    width: "80%",
    maxWidth: "600px",
    border: `3px dashed #e01d3f`,
    padding: "10px",
    marginBottom: "20px",
    backgroundColor: "#fff", 
    boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)", 
  },

  notificationsP: {
    margin: 0,
    marginTop: "15px",
  },
});


class Notifications extends Component {
  constructor(props) {
    super(props);
    this.markAsRead = this.markAsRead.bind(this);
  }

  shouldComponentUpdate(nextProps) {
    return (
      nextProps.listNotifications.length > this.props.listNotifications.length
    );
  }

  markAsRead(id) {
    console.log(`Notification ${id} has been marked as read`);
  }

  render() {
    const { displayDrawer, listNotifications } = this.props;
    return (
      <>
        <div className={css(styles.menuItem)} id="menuItem">
          <p>Your notifications</p>
        </div>
        {displayDrawer && (
          <div className={css(styles.notifications)} id="Notifications">
            <div className={css(styles.notificationsContent)}>
              <button
                style={{
                  background: "transparent",
                  border: "none",
                  position: "absolute",
                  right: 20,
                  top: 20,
                }}
                aria-label="close"
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
              <ul style={{ padding: 0, margin: 0 }}>
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
                    markAsRead={this.markAsRead}
                  />
                ))}
              </ul>
            </div>
          </div>
        )}
      </>
    );
  }
}

Notifications.defaultProps = {
  displayDrawer: false,
  listNotifications: [],
};

Notifications.propTypes = {
  displayDrawer: PropTypes.bool,
  listNotifications: PropTypes.arrayOf(NotificationItemShape),
};

export default Notifications;
