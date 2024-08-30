import rootReducer from "./rootReducer";
import { combineReducers } from "redux";
import { Map } from "immutable";


describe("these are tests for the uiReducer", function () {
  test("verifying that the state returned by the uiReducer function is equal to the the initial state", function () {
    const expectedState = {
      courses: Map({}),
      notifications: Map({}),
      ui: Map({}),
    };
    const reducer = combineReducers(rootReducer);
    const state = reducer(undefined, { type: "RANDOM" });
    for (const st in expectedState) {
      expect(state[st]).toBeTruthy();
      expect(typeof expectedState[st]).toEqual(typeof state[st]);
    }
  });
});
