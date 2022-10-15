import { LinkedList } from "./LinkedList";

let list;

beforeEach(() => {
  list = LinkedList();
});

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
it.skip("prepend Tests", () => {});
it.skip("size Tests", () => {});
it("head Tests", () => {
  expect(list.head().value).toEqual(null);
  expect(list.head().nextNode).toEqual(null);
});
it("tail Tests", () => {
  expect(list.tail().value).toEqual(null);
  expect(list.tail().nextNode).toEqual(null);
});
it.skip("at Tests", () => {});
it.skip("pop Tests", () => {});
it.skip("contains Tests", () => {});
it.skip("find Tests", () => {});
it.skip("toString Tests", () => {});
