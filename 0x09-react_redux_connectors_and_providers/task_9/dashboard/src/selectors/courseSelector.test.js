import { Map, fromJS } from "immutable";
import { getCoursesList } from "./courseSelector";


describe("this is a test to the course selector", function () {
  test("verifying that the selector is working as expected", function () {
    const state = {
      courses: fromJS([
        {
          id: 1,
          name: "ES6",
          isSelected: false,
          credit: 60,
        },
        {
          id: 2,
          name: "Webpack",
          isSelected: false,
          credit: 20,
        },
        {
          id: 3,
          name: "React",
          isSelected: false,
          credit: 40,
        },
      ]),
    };

    const expectedResult = [
      {
        id: 1,
        name: "ES6",
        isSelected: false,
        credit: 60,
      },
      {
        id: 2,
        name: "Webpack",
        isSelected: false,
        credit: 20,
      },
      {
        id: 3,
        name: "React",
        isSelected: false,
        credit: 40,
      },
    ];
    const selected = getCoursesList(state);
    expect(selected.toJS()).toEqual(expectedResult);
  });
});
