import {FETCH_NOTIFICATIONS_SUCCESS, MARK_AS_READ, SET_TYPE_FILTER} from "../actions/notificationActionTypes";
import {Map} from 'immutable';
import notificationsNormalizer from "../schema/notifications";
import { normalize } from "normalizr";

export const initialNotifsState = {
    notifications: [],
    filter: "DEFAULT",
};



const notificationReducer = (state = Map(initialNotifsState), action) => {
    switch(action.type){
        case FETCH_NOTIFICATIONS_SUCCESS:
            const notificsNormalizer = notificationsNormalizer(action.data);
            return state.merge(notificsNormalizer);


        case MARK_AS_READ:
            return state.setIn(['notifications', action.index.toString(), 'isRead'], true);


        case SET_TYPE_FILTER:
            return state.set('filter', action.filter);
    default:
        return state;
        }
};
export default notificationReducer;
