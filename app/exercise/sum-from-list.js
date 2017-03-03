export default function sumFromList(li) {
  var count = 0;
  for (let i = 0; i < li.children.length; i++) {
    count = count + parseInt(li.children[i].innerText);
  }
  return count;
}
