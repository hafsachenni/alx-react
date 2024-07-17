import { Map, List } from 'immutable';

export function concatElements (page1, page2) {
  const firstlist = List(page1);
  const secondlist = List(page2);
  return firstlist.concat(secondlist);
}

export function mergeElements (page1, page2) {
  const firstmap = Map(page1);
  const secondmap = Map(page2);
  return firstmap.merge(secondmap);
}
