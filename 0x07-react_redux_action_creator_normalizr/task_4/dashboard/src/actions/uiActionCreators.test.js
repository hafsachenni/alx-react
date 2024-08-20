import {LOGIN, LOGOUT, DISPLAY_NOTIFICATION_DRAWER, HIDE_NOTIFICATION_DRAWER} from "./uiActionTypes";
import {login, logout, displayNotificationDrawer, hideNotificationDrawer} from "./uiActionCreators";



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
