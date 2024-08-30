export const getCoursesList = (state) => {
    const courses = state.courses;
    if (courses) {
      return courses.valueSeq();
    }
  
    return courses;
};
