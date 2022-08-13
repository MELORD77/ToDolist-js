this.document.addEventListener('DOMContentLoaded', function(){
const formCreate = document.getElementById('form-create')
const formEdit = document.getElementById('form-edit')
const listGroupTodo = document.getElementById('list-group-todo')
//const messageCreate = document.getElementById('message-create')
const time = document.getElementById('time')
const modal = document.getElementById('modal')
const overlay = document.getElementById('overlay')
/* time elements */
const fullDay = document.getElementById('full-day')
const hourEl = document.getElementById('hour')
const minuteEl = document.getElementById('minute')
const secondEl = document.getElementById('second')
const closeEl = document.getElementById('close')
  

let todos = JSON.parse(localStorage.getItem('lsit'))
?JSON.parse(localStorage.getItem('lsit'))
:[]


 showtodos()


function settodos(){
    localStorage.setItem('list',JSON.stringify(todos))
   

} 
//locaStorage ga malumot qushish

 function showtodos(){
  const todos = JSON.parse(localStorage.getItem('list'))
 
  listGroupTodo.innerHTML = ''
  
  todos.forEach((item,i) => {
    
  listGroupTodo.innerHTML += `
  <li class="list-group-item d-flex justify-content-between" >
  ${item.text}  
  <div class="todo-icons">
    <span class="opasity-50 me-2">${item.time}</span>
    <img src="./img/edit.svg" alt="edit-icon" width="25" height="25"/>
    <img src="./img/delete.svg" alt="delete-icon" width="25" height="25"/>

  </div>
</li>`
})
 
}
 //showerror
      function showMessage(where, message){
document.getElementById(`${where}`).textContent = message
setTimeout(() => {
    document.getElementById(`${where}`).textContent = '' 
}, 2500);
}
//Button
formCreate.addEventListener('submit',(e)=>{
    e.preventDefault()
   const todoText = formCreate['input-create'].value.trim()
   formCreate.reset()
   if (todoText.length) {

    todos.push({text:todoText,  time:'22:00', complated: true })
    
    settodos()
    showtodos()
    console.log(todos)

   } else {
    showMessage('message-create','text kiriting')
   }

 })
})