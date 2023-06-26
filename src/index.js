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
  let btn = document.createElement("button")
  btn.addEventListener("click", handleDelete)
  btn.textContent = "X"
  li.appendChild(btn)
  document.querySelector("ul").appendChild(li)
}

function handleDelete(e){
  e.target.parentNode.remove()
}
