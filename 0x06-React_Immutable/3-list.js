import { List } from 'immutable';

export function getListObject (array) {
  const list = List(array);
  return list;
}

export function addElementToList (list, element) {
  const mappedlist = list.push(element);
  return mappedlist;
}
