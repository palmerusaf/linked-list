export const LinkedList = (...values) => {
  let _head = Node();
  let _tail = _head;

  const append = (pValue) => {
    const newNode = Node(pValue);
    if (_head.value === null && _head.nextNode === null) {
      _head = newNode;
      _tail = _head;
      return;
    }
    _tail.nextNode = newNode;
    _tail = _tail.nextNode;
  };

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
