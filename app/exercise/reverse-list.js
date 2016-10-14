export default function reverseList(list, output) {
  const children = list.children;

  for (let i = children.length - 1; i >= 0; i--) {
    list.cloneNode(true);
    output = parseInt(children[i].innerHTML);
  }

  return;
}
