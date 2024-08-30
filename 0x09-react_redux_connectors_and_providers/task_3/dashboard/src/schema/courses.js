import { normalize, schema } from 'normalizr';

const courses = new schema.Entity('courses');


const coursesNormalizer = (data) => {
    const dataNormalizer = normalize(data, [courses]);
    return dataNormalizer.entities.courses;
};

export default coursesNormalizer;
