import uiReducer, { initialState } from "./uiReducer";
import { DISPLAY_NOTIFICATION_DRAWER } from "../actions/uiActionTypes";
import { toJS } from "immutable";

const USER = { email: "example@test.com", password: "025166" };


describe("these are tests for the reducer", function () {
  test(" verifying that the state returned by the uiReducer function equals the initial state when no action is passed", function () {
    const state = uiReducer(undefined, {});
    expect(state.toJS()).toEqual(initialState);
  });

  test("verifying that the state returned by the uiReducer function equals the initial state when the action SELECT_COURSE is passed", function () {
    const state = uiReducer(undefined, { type: "SELECT_COURSE" });
    expect(state.toJS()).toEqual(initialState);
  });
  
  test(" verifying that the state returned by the uiReducer function, when the action DISPLAY_NOTIFICATION_DRAWER is passed, changes correctly the isNotificationDrawerVisible property", function () {
    const state = uiReducer(undefined, { type: DISPLAY_NOTIFICATION_DRAWER });
    expect(state.toJS()).toEqual({
      ...initialState,
      isNotificationDrawerVisible: true,
    });
  });

  test("verifying that the state returned by the uiReducer function changes correctly the user property", function () {
    const state = uiReducer(undefined, { type: LOGIN, user: USER });
    expect(state.toJS()).toEqual({
      ...initialState,
      user: USER,
    });
  });
});

