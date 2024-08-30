import { FETCH_COURSE_SUCCESS, SELECT_COURSE, UNSELECT_COURSE} from "../actions/courseActionTypes";
import {Map} from 'immutable';
import coursesNormalizer from "../schema/courses";



export const initialCoursesState = [];

const courseReducer = (state = Map(initialCoursesState), action) => {
    switch(action.type){
        case FETCH_COURSE_SUCCESS:
            const normalizer = coursesNormalizer(action.data);
            return state.merge(normalizer);



        case SELECT_COURSE:
            return state.setIn(['entities', 'courses', action.index, 'isSelected'], true);


        case UNSELECT_COURSE:
            return state.setIn(['entities', 'courses', action.index, 'isSelected'], false);


    default:
        return state;        

    }
};

export default courseReducer;
