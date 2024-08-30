import courseReducer, { initialCoursesState } from "./courseReducer";
import notificationReducer, {initialNotifsState} from "./notificationReducer";
import uiReducer, { initialState } from "./uiReducer";
import { Map } from "immutable";

export const initiallState = {
  courses: Map(initialCoursesState),
  notifications: Map(initialNotifsState),
  ui: Map(initialState),
};

const rootReducer = {
  courses: courseReducer,
  notifications: notificationReducer,
  ui: uiReducer,
};

export default rootReducer;
