import notificationReducer, {initialNotifsState} from "./notificationReducer";
import {FETCH_NOTIFICATIONS_SUCCESS,MARK_AS_READ, SET_TYPE_FILTER} from "../actions/notificationActionTypes";



describe("these are tests for notif Reducer", function () {
    test("testing the default state", function () {
      const state = notificationReducer(undefined, {});
      expect(state).toEqual(initialNotifsState);
    });



    test("checking if the data passed is being returned", function () {
      const action = {
        type: FETCH_NOTIFICATIONS_SUCCESS,
        data: [
          {
            id: 1,
            type: "default",
            value: "New course available",
          },
          {
            id: 2,
            type: "urgent",
            value: "New resume available",
          },
          {
            id: 3,
            type: "urgent",
            value: "New data available",
          },
        ],
      };
  
      const expectedData = {
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
  
      const state = notificationReducer(undefined, action);
      expect(state).toEqual(expectedData);
    });




    test("cheking if MARK_AS_READ returns the right output", function () {
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
  
      const action = {
        type: MARK_AS_READ,
        index: 2,
      };
  
      const expectedData = {
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
            isRead: true,
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
  
      const state = notificationReducer(initialState, action);
      expect(state).toEqual(expectedData);
    });



    test("checking if SET_TYPE_FILTER returns the right output", function () {
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
  
      const action = {
        type: SET_TYPE_FILTER,
        filter: "URGENT",
      };
  
      const expectedData = {
        filter: "URGENT",
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
  
      const state = notificationReducer(initialState, action);
      expect(state).toEqual(expectedData);
    });
});
