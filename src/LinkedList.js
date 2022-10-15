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

  const at = (pIndex) => {
    let nodeResult = null;
    const setNodeAtIndex = ({ node, index }) => {
      if (index === pIndex) {
        nodeResult = node;
        return;
      }
    };
    _traverseList(setNodeAtIndex);
    return nodeResult;
  };

  const pop = () => {
    const isHeadNull = _head.value === null && _head.nextNode === null;
    if (isHeadNull) return;

    const isSingleNode = _head.value !== null && _head.nextNode === null;
    if (isSingleNode) {
      _head.value = null;
      _tail = _head;
      return;
    }

    const indexBeforeTail = size() - 2;
    const nodeBeforeTail = at(indexBeforeTail);
    _tail = nodeBeforeTail;
    _tail.nextNode = null;
  };

  const contains = (pValue) => {
    let hasValue = false;
    const checkForValue = ({ node }) => {
      if (node.value === pValue) {
        hasValue = true;
        return;
      }
    };
    _traverseList(checkForValue);
    return hasValue;
  };

  const find = (pValue) => {
    let foundIndex = null;
    const checkNodeValue = ({ node, index }) => {
      if (node.value === pValue) {
        foundIndex = index;
        return;
      }
    };
    _traverseList(checkNodeValue);
    return foundIndex;
  };

  const toString = () => {};

  function _traverseList(cb) {
    let index = 0;
    let travelNode = _head;
    do {
      cb({ node: travelNode, index });
      travelNode = travelNode.nextNode;
      index++;
    } while (travelNode !== null);
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
