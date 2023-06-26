document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form")
  form.addEventListener("submit", (e) => {
    e.preventDefault()
    buildToDo(e.target["new-task-description"].value)
    form.reset()
  })
});

function buildToDo(thing){
  let li = document.createElement("li")
  li.textContent = thing + " "
  let taskPriority = document.querySelector("select").selectedIndex
  li.style.color = importance(taskPriority)
  let btn = document.createElement("button")
  btn.addEventListener("click", handleDelete)
  btn.textContent = "X"
  li.appendChild(btn)
  document.querySelector("ul").appendChild(li)
}

function importance(index){
  switch(index){
    case 0:
      color = "black"
      break;
    case 1:
      color = "red"
      break;
    case 2:
      color = "orange"
      break;
    case 3:
      color = "green"
  }

  return color
}

function handleDelete(e){
  e.target.parentNode.remove()
}
