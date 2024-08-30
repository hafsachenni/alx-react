import { createSelector } from 'reselect';


export const filterTypeSelected = (state) => state.get("filter");
export const getNotifications = (state) => state.get("notifications");

export const getUnreadNotificationsByType = createSelector(
  [filterTypeSelected, getNotifications],
  (filter, notifications) => {
    const unreadNotifications = notifications.filter(notification => !notification.isRead);

    if (filter === 'urgent') {
      return unreadNotifications.filter(notification => notification.type === 'urgent');
    }

    return unreadNotifications;
  }
);
