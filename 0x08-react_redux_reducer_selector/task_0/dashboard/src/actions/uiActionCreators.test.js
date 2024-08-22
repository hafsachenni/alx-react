import {LOGIN, LOGOUT, DISPLAY_NOTIFICATION_DRAWER, HIDE_NOTIFICATION_DRAWER} from "./uiActionTypes";
import {login, logout, displayNotificationDrawer, hideNotificationDrawer, loginRequest, loginSuccess, loginFailure} from "./uiActionCreators";



describe("testing the action creators", function () {
    it("testing the login action creator", function () {
      const user = { email: "test@example.com", password: 1257865};
      const expectedResult = { type: LOGIN, user };
      const result = login(user.email, user.password);
      expect(result).toEqual(expectedResult);
    });

    it("testing the logout action creator", function () {
      const expectedResult = { type: LOGOUT };
      const result = logout();
      expect(result).toEqual(expectedResult);
    });

    it("testing the displayNotificationDrawer action creator", function () {
      const expectedResult = { type: DISPLAY_NOTIFICATION_DRAWER };
      const result = displayNotificationDrawer();
      expect(result).toEqual(expectedResult);
    });

    it("testing the hideNotificationDrawer action creator", function () {
      const expectedResult = { type: HIDE_NOTIFICATION_DRAWER };
      const result = hideNotificationDrawer();
      expect(result).toEqual(expectedResult);
    });
});



describe("this is a test for async action creators", function () {
  afterEach(() => {
    fetchMock.restore();
  });

  test("verifying that if the API returns the right response, the store receives two actions LOGIN and LOGING_SUCCESS", () => {
    const store = mockStore({});
    fetchMock.restore();
    const user = {
      email: "test@example.com",
      password: "02445589",
    };
    fetchMock.get("http://localhost:8564/login-success.json", "{}");
    return store
      .dispatch(loginRequest(user.email, user.password))
      .then(() => {
        const actions = store.getActions();
        expect(actions[0]).toEqual(login(user.email, user.password));
        expect(actions[1]).toEqual(loginSuccess());
      });
  });



  test("verifying that if the API query fails, the store receives two actions LOGIN and LOGIN_FAILURE", () => {
    const store = mockStore({});

    fetchMock.mock("http://localhost:8564/login-success.json", 500);

    const user = {
      email: "test@example.com",
      password: "02445589",
    };
    return store
      .dispatch(loginRequest(user.email, user.password))
      .then(() => {
        const actions = store.getActions();
        expect(actions[0]).toEqual(login(user.email, user.password));
        expect(actions[1]).toEqual(loginFailure());
      });
  });
});
