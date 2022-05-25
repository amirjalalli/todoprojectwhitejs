let inputElem = document.getElementById("input")
let addToDoForm = document.querySelector(".add")
let ulElemTodo = document.getElementById('parent')

addToDoForm.addEventListener("submit", function(e) {
    e.preventDefault()
})

function addNewToDo (newTodoValue) {
    let newLiElem = document.createElement("li")
    newLiElem.className = "list-group-item d-flex justify-content-between align-items-center";
    console.log(newLiElem)

    let newTitleSpan = document.createElement("span")
    newTitleSpan.innerHTML = newTodoValue

    let newTodoTrash = document.createElement("i")
    newTodoTrash.className = "fa fa-trash-o delete"
    newTodoTrash.addEventListener("click" ,function(e) {
        e.target.parentElement.remove()
    })



    ulElemTodo.append(newLiElem)

    newLiElem.append(newTitleSpan,newTodoTrash)
}





inputElem.addEventListener("keydown" , function (e) {
    // console.log(e)
    let newTodoValue = e.target.value.trim()
    console.log(newTodoValue)
    if(e.keyCode === 13) {
        if (newTodoValue) {
            // console.log("It is value")
            inputElem.value = ''
            addNewToDo(newTodoValue)
        }

    }
        
})

