export const LinkedList = (...values) => {
  let _head;
  let _tail;
  const append = () => {};
  const prepend = () => {};
  const size = () => {};
  const head = () => _head;
  const tail = () => _tail;
  const at = () => {};
  const pop = () => {};
  const contains = () => {};
  const find = () => {};
  const toString = () => {};

  return {
    append,
    prepend,
    size,
    head,
    tail,
    at,
    pop,
    contains,
    find,
    toString,
  };
};

export const Node = (value = null, nextNode = null) => {
  return { value, nextNode };
};