import {MARK_AS_READ, SET_TYPE_FILTER, NotificationTypeFilters} from "./notificationActionTypes";
import { markAsAread, setNotificationFilter} from "./notificationActionCreators";


describe("tests for action creators", function () {
    it("checking if calling the creator with 1 as an argument returns the expected output:", function () {
      const expectedResult = {
        type: MARK_AS_READ,
        index: 1,
      };
      const result = markAsAread(1);
      expect(result).toEqual(expectedResult);
    });
  

    it("checking if calling the creator with one of the filters from NotificationTypeFilters as an argument returns expexted result", function () {
      const expectedResult = {
        type: SET_TYPE_FILTER,
        filter: "DEFAULT",
      };
      const result = setNotificationFilter(NotificationTypeFilters.DEFAULT);
      expect(result).toEqual(expectedResult);
    });
});
