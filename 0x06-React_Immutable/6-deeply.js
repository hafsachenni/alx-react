import { Map } from 'immutable';

export default function mergeDeeplyElements(page1, page2) {
  const firstmap = Map(page1);
  const secondmap = Map(page2);
  return firstmap.mergeDeep(secondmap);
}
