import { Map } from 'immutable';

export default function areMapsEqual(map1, map2) {
  const firstmap = Map(map1);
  const secondmap = Map(map2);
  const equal = firstmap.is(secondmap);
  return equal;
}
