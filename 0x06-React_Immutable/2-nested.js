import { fromJS } from "immutable";

export default function accessImmutableObject(object, array) {
    const mapping = fromJS(object);
    return mapping.getIn(array, undefined);
}
