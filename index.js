function getFirstSelector(selector) {
  var firstSelector = document.querySelector(`${selector}`)
  return firstSelector
}
function nestedTarget() {
  var target = document.getElementById('nest')
  return target
}
function increaseRankBy(n) {
  const lis = document.getElementById(`app`).querySelectorAll(`ul.ranked-list li`)
  for (let i = 0; i < lis.length; i++) {
    lis[i].innerHTML = (parseInt(lis[i].innerHTML) + n).toString()
  }
}
function deepestChild() {
  var current = document.getElementById('grand-node')
  while(current) {
    var prev = current.querySelectorAll(`div`)
    current = current.children
  }
  return prev
}
