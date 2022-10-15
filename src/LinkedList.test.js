import { LinkedList } from "./LinkedList";

let list;

beforeEach(() => {
  list = LinkedList();
});

describe("append tests", () => {
  it("append one item", () => {
    list.append(1);
    const head = list.head();
    const tail = list.tail();

    const expHead = { value: 1, nextNode: null };
    const expTail = expHead;

    expect(head).toEqual(expHead);
    expect(tail).toEqual(expTail);
  });
  it("append two items", () => {
    list.append(1);
    list.append(4);
    const head = list.head();
    const tail = list.tail();

    const expTail = { value: 4, nextNode: null };
    const expHead = { value: 1, nextNode: expTail };

    expect(head).toEqual(expHead);
    expect(tail).toEqual(expTail);
  });
  it("append three items", () => {
    list.append(1);
    list.append(4);
    list.append(3);
    const head = list.head();
    const tail = list.tail();

    const expTail = { value: 3, nextNode: null };
    const expHead = { value: 1, nextNode: { value: 4, nextNode: expTail } };

    expect(head).toEqual(expHead);
    expect(tail).toEqual(expTail);
  });
  it("append five items", () => {
    list.append(1);
    list.append(4);
    list.append(3);
    list.append(6);
    list.append(8);
    const head = list.head();
    const tail = list.tail();

    const expTail = { value: 8, nextNode: null };
    const expHead = {
      value: 1,
      nextNode: {
        value: 4,
        nextNode: { value: 3, nextNode: { value: 6, nextNode: expTail } },
      },
    };

    expect(head).toEqual(expHead);
    expect(tail).toEqual(expTail);
  });
});
describe("prepend tests", () => {
  it("prepend one item", () => {
    list.prepend(1);
    const head = list.head();
    const tail = list.tail();

    const expHead = { value: 1, nextNode: null };
    const expTail = expHead;

    expect(head).toEqual(expHead);
    expect(tail).toEqual(expTail);
  });
  it("prepend two items", () => {
    list.prepend(1);
    list.prepend(4);
    const head = list.head();
    const tail = list.tail();

    const expTail = { value: 1, nextNode: null };
    const expHead = { value: 4, nextNode: expTail };

    expect(head).toEqual(expHead);
    expect(tail).toEqual(expTail);
  });
  it("prepend three items", () => {
    list.prepend(1);
    list.prepend(4);
    list.prepend(3);
    const head = list.head();
    const tail = list.tail();

    const expTail = { value: 1, nextNode: null };
    const expHead = { value: 3, nextNode: { value: 4, nextNode: expTail } };

    expect(head).toEqual(expHead);
    expect(tail).toEqual(expTail);
  });
  it("prepend five items", () => {
    list.prepend(1);
    list.prepend(4);
    list.prepend(3);
    list.prepend(6);
    list.prepend(8);
    const head = list.head();
    const tail = list.tail();

    const expTail = { value: 1, nextNode: null };
    const expHead = {
      value: 8,
      nextNode: {
        value: 6,
        nextNode: { value: 3, nextNode: { value: 4, nextNode: expTail } },
      },
    };

    expect(head).toEqual(expHead);
    expect(tail).toEqual(expTail);
  });
});
describe("size Tests", () => {
  it("works with null head", () => {
    expect(list.size()).toEqual(1);
  });
  it("works with one node", () => {
    list.append(4);
    expect(list.size()).toEqual(1);
  });
  it("works with two nodes", () => {
    list.append(3);
    list.append(4);
    expect(list.size()).toEqual(2);
  });
  it("works with three nodes", () => {
    list.append(3);
    list.append(4);
    list.append(3);
    expect(list.size()).toEqual(3);
  });
});
it("head Tests", () => {
  expect(list.head().value).toEqual(null);
  expect(list.head().nextNode).toEqual(null);
});
it("tail Tests", () => {
  expect(list.tail().value).toEqual(null);
  expect(list.tail().nextNode).toEqual(null);
});
describe("at Tests", () => {
  it("returns null if invalid index", () => {
    expect(list.at(1)).toEqual(null);
    expect(list.at(-1)).toEqual(null);
  });
  it("works with null head", () => {
    const result = { value: null, nextNode: null };
    expect(list.at(0)).toEqual(result);
  });
  it("works with one node", () => {
    list.append(4);
    const result = { value: 4, nextNode: null };
    expect(list.at(0)).toEqual(result);
  });
  it("works with two nodes", () => {
    list.append(4);
    list.append(5);
    const result2 = { value: 5, nextNode: null };
    const result1 = { value: 4, nextNode: result2 };
    expect(list.at(1)).toEqual(result2);
    expect(list.at(0)).toEqual(result1);
  });
  it("works with three nodes", () => {
    list.append(2);
    list.append(4);
    list.append(5);
    const result3 = { value: 5, nextNode: null };
    const result2 = { value: 4, nextNode: result3 };
    const result1 = { value: 2, nextNode: result2 };
    expect(list.at(2)).toEqual(result3);
    expect(list.at(1)).toEqual(result2);
    expect(list.at(0)).toEqual(result1);
  });
});
describe("pop Tests", () => {
  it("works once", () => {
    list.append(1);
    list.append(4);
    list.append(3);
    list.append(2);
    list.pop();
    const head = list.head();
    const tail = list.tail();

    const expTail = { value: 3, nextNode: null };
    const expHead = { value: 1, nextNode: { value: 4, nextNode: expTail } };

    expect(head).toEqual(expHead);
    expect(tail).toEqual(expTail);
  });
  it("works twice", () => {
    list.append(1);
    list.append(4);
    list.append(3);
    list.append(2);
    list.pop();
    list.pop();
    const head = list.head();
    const tail = list.tail();

    const expTail = { value: 4, nextNode: null };
    const expHead = { value: 1, nextNode: expTail };

    expect(head).toEqual(expHead);
    expect(tail).toEqual(expTail);
  });
  it("pop till head", () => {
    list.append(1);
    list.append(4);
    list.append(3);
    list.append(2);
    list.pop();
    list.pop();
    list.pop();
    const head = list.head();
    const tail = list.tail();

    const expTail = { value: 1, nextNode: null };
    const expHead = expTail;

    expect(head).toEqual(expHead);
    expect(tail).toEqual(expTail);
  });
  it("pop everything results in null head", () => {
    list.append(4);
    list.pop();
    const expHead = { value: null, nextNode: null };
    const expTail = expHead;
    expect(list.head()).toEqual(expHead);
    expect(list.tail()).toEqual(expTail);
  });
  it("pops on null list do nothing", () => {
    list.append(4);
    list.pop();
    list.pop();
    const expHead = { value: null, nextNode: null };
    const expTail = expHead;
    expect(list.head()).toEqual(expHead);
    expect(list.tail()).toEqual(expTail);
  });
});
describe("contains Tests", () => {
  it("returns true if value found", () => {
    list.append(2);
    list.append(3);
    list.append(4);
    expect(list.contains(2)).toBe(true);
  });
  it("returns false if value not found", () => {
    list.append(2);
    list.append(3);
    list.append(4);
    expect(list.contains(6)).toBe(false);
  });
  it("returns false if null head", () => {
    expect(list.contains(6)).toBe(false);
  });
});
describe("find Tests", () => {
  it("returns index if value found", () => {
    list.append(2);
    list.append(3);
    list.append(4);
    const index1 = 0;
    const index2 = 1;
    const index3 = 2;
    expect(list.find(2)).toBe(index1);
    expect(list.find(3)).toBe(index2);
    expect(list.find(4)).toBe(index3);
  });
  it("returns null if value not found", () => {
    list.append(2);
    list.append(3);
    list.append(4);
    expect(list.find(6)).toBe(null);
  });
  it("returns null if null head", () => {
    expect(list.find(6)).toBe(null);
  });
});
it.skip("toString Tests", () => {});
