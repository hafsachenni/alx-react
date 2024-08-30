import {FETCH_NOTIFICATIONS_SUCCESS, MARK_AS_READ, SET_TYPE_FILTER, SET_LOADING_STATE} from "../actions/notificationActionTypes";
import {Map} from 'immutable';
import notificationsNormalizer from "../schema/notifications";
import { normalize } from "normalizr";

export const initialNotifsState = {
    notifications: {},
    filter: "DEFAULT",
    loading: false,
};



const notificationReducer = (state = Map(initialNotifsState), action) => {
    switch(action.type){
        case FETCH_NOTIFICATIONS_SUCCESS:
            const notificsNormalizer = notificationsNormalizer(action.data);
            return state.mergeDeep(notificsNormalizer);


        case MARK_AS_READ:
            return state.setIn(['notifications', action.index.toString(), 'isRead'], true);


        case SET_TYPE_FILTER:
            return state.set('filter', action.filter);


        case SET_LOADING_STATE:
            return state.set("loading", action.loading);

    default:
        return state;
        }
};
export default notificationReducer;
