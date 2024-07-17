const Immutable = require('immutable');

const getImmutableObject = (object) => {
  return Immutable.Map(object);
};

module.exports = getImmutableObject;
