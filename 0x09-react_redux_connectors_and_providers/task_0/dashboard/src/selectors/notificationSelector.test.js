import { Map, fromJS } from "immutable";
import {filterTypeSelected, getNotifications, getUnreadNotifications} from "./notificationSelector";
import notificationReducer, {initialNotifsState} from "../reducers/notificationReducer";
import notificationsNormalizer from "../schema/notifications";



describe("these are tests for selectors", function () {
  test("testing that filterTypeSelected works as expected", function () {
    const state = notificationReducer(undefined, {});
    const selected = filterTypeSelected(state);
    expect(selected).toEqual(initialNotifsState.filter);
  });



  test("testing that getNotifications returns a list of the message entities within the reducer", function () {
    const initialState = {
      filter: "DEFAULT",
      notifications: [
        {
          id: 1,
          isRead: false,
          type: "default",
          value: "New course available",
        },
        {
          id: 2,
          isRead: false,
          type: "urgent",
          value: "New resume available",
        },
        {
          id: 3,
          isRead: false,
          type: "urgent",
          value: "New data available",
        },
      ],
    };

    initialState.notifications = notificationsNormalizer(
      initialState.notifications
    ).notifications;

    const state = notificationReducer(fromJS(initialState), {});
    const selected = getNotifications(state);
    expect(state instanceof Map).toEqual(true);
    expect(selected.toJS()).toEqual(
      notificationsNormalizer(initialState.notifications).notifications
    );
  });




  test("testing that getUnreadNotifications return a list of the message entities within the reducer", function () {
    const initialState = {
      filter: "DEFAULT",
      notifications: [
        {
          id: 1,
          isRead: false,
          type: "default",
          value: "New course available",
        },
        {
          id: 2,
          isRead: false,
          type: "urgent",
          value: "New resume available",
        },
        {
          id: 3,
          isRead: true,
          type: "urgent",
          value: "New data available",
        },
      ],
    };

    const expectedResult = [
      {
        id: 3,
        isRead: true,
        type: "urgent",
        value: "New data available",
      },
    ];

    initialState.notifications = notificationsNormalizer(
      initialState.notifications
    ).notifications;

    const state = notificationReducer(fromJS(initialState), {});
    const selected = getUnreadNotifications(state);
    expect(state instanceof Map).toEqual(true);
    expect(selected.toJS()).toEqual(
      notificationsNormalizer(expectedResult).notifications
    );
  });
});
