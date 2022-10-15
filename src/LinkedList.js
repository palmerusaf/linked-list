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

  const prepend = (pValue) => {
    if (_head.value === null && _head.nextNode === null) {
      _head = Node(pValue);
      _tail = _head;
      return;
    }
    const newHead = Node(pValue, _head);
    _head = newHead;
  };
  const size = () => {
    let size;
    const setSizeToIndex = ({ index }) => (size = index);
    _traverseList(setSizeToIndex);
    return ++size;
  };
  const head = () => _head;
  const tail = () => _tail;
  const at = () => {};
  const pop = () => {};
  const contains = () => {};
  const find = () => {};
  const toString = () => {};

  function _traverseList(cb) {
    //edge case for single node
    if (_head.nextNode === null) return cb({ node: _head, index: 0 });

    let index = 1;
    let travelNode = _head;
    while (travelNode.nextNode !== null) {
      cb({ node: travelNode, index });
      travelNode = travelNode.nextNode;
      index++;
    }
  }

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
