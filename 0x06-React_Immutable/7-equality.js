import { is } from 'immutable';

export default function areMapsEqual(map1, map2) {
  const equal = is(map1, map2);
  return equal;
}
