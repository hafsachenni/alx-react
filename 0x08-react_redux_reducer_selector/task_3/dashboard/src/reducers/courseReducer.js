import { FETCH_COURSE_SUCCESS, SELECT_COURSE, UNSELECT_COURSE} from "../actions/courseActionTypes";


const courseReducer = (state = [], action) => {
    switch(action.type){
        case FETCH_COURSE_SUCCESS:
            return action.data.map((item) => {
                return { ...item, isSelected: false};
            });


        case SELECT_COURSE:
            return state.map(item => 
                item.id === action.index
                ? { ...item, isSelected: true}
                : item
            );


        case UNSELECT_COURSE:
            return state.map(item => 
                item.id === action.index
                ? { ...item, isSelected: false}
                : item
            );


    default:
        return state;        

    }
};

export default courseReducer;
