import { LinkedList } from "./LinkedList";

const emptyList = LinkedList();

it("append Tests", () => {});
it("prepend Tests", () => {});
it("size Tests", () => {});
it("head Tests", () => {
  expect(emptyList.head().value).toEqual(null);
  expect(emptyList.head().nextNode).toEqual(null);
});
it("tail Tests", () => {
  expect(emptyList.tail().value).toEqual(null);
  expect(emptyList.tail().nextNode).toEqual(null);
});
it("at Tests", () => {});
it("pop Tests", () => {});
it("contains Tests", () => {});
it("find Tests", () => {});
it("toString Tests", () => {});
