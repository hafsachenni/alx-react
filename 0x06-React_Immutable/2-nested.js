import { fromJS } from 'immutable';

const accessImmutableObject = (object, array) => {
  const mapping = fromJS(object);
  return mapping.getIn(array, undefined);
};
export default accessImmutableObject;
