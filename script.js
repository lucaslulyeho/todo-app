let todos = [
    {
        content: 'Jog around the park 3x',
        active: true
    },
    {
        content: 'Complete online JavaScript course',
        active: false
    },
    {
        content: '10 minutes meditation',
        active: true
    },
    {
        content: 'Pick up groceries',
        active: true
    },
    {
        content: 'Read for 1 hour',
        active: true
    },
    {
        content: 'Complete Todo App on Frontend Mentor',
        active: true
    },
    {
        content: 'Make this Todo app usable',
        active: false
    },
];

let todoList = document.getElementById('todo-list');
let todoInput = document.getElementById('todo-input');
let allItems = document.getElementById('all-items');
let activeItems = document.getElementById('active-items');
let completedItems = document.getElementById('completed-items');
let clearCompletedBtn = document.getElementById('clear-completed');
let itemsLeft = document.getElementById('items-left');
let listItems ='';
let selectedItemText = '';
let todoItems = ''

//items left

displayItemsLeft();
function displayItemsLeft(){
    if(todos.length == 0){
        itemsLeft.innerText = 'No items'
    }else if(todos.length == 1){
        itemsLeft.innerText = '1 item left'
    }else{
        itemsLeft.innerText = `${todos.length} items left`

    }
}
function displayListItems(){

    for(let todo of todos){
        let listItem = document.createElement('li');
        if(todo.active){
            listItem.setAttribute('class', 'todo-item active');
            let firstListDiv = document.createElement('div');
            firstListDiv.setAttribute('class', 'check-icon')
            listItem.appendChild(firstListDiv);
        }else {
            listItem.setAttribute('class', 'todo-item completed');
            let iconCheck = document.createElement('img');
            iconCheck.setAttribute('src', 'images/icon-check.svg');
            let firstListDiv = document.createElement('div');
            firstListDiv.setAttribute('class', 'check-icon checked');
            firstListDiv.appendChild(iconCheck);
            listItem.appendChild(firstListDiv);
        }
        
        
        let secondListDiv = document.createElement('div');
        secondListDiv.setAttribute('class', 'list-item');
        let todoContent = document.createTextNode(todo.content);
        let iconCross = document.createElement('img');
        iconCross.setAttribute('src', 'images/icon-cross.svg');
        iconCross.setAttribute('class', 'icon-cross');
        secondListDiv.appendChild(todoContent);
        secondListDiv.appendChild(iconCross);
        listItem.appendChild(secondListDiv);
        todoList.appendChild(listItem);
    }
    listItems = document.getElementsByClassName('list-item');
    todoItems = document.getElementsByClassName('todo-item');
    registerListItems();
    registerTodoItems();
}


function displayActiveItems(){
    for(let todo of todos){
        let listItem = document.createElement('li');
        if(todo.active){
            listItem.setAttribute('class', 'todo-item active');
            let firstListDiv = document.createElement('div');
            firstListDiv.setAttribute('class', 'check-icon')
            listItem.appendChild(firstListDiv);
        }else {
            listItem.setAttribute('class', 'todo-item completed');
            listItem.style.display = 'none';
            let iconCheck = document.createElement('img');
            iconCheck.setAttribute('src', 'images/icon-check.svg');
            let firstListDiv = document.createElement('div');
            firstListDiv.setAttribute('class', 'check-icon checked');
            firstListDiv.appendChild(iconCheck);
            listItem.appendChild(firstListDiv);
        }
        
        let secondListDiv = document.createElement('div');
        secondListDiv.setAttribute('class', 'list-item');
        let todoContent = document.createTextNode(todo.content);
        let iconCross = document.createElement('img');
        iconCross.setAttribute('src', 'images/icon-cross.svg');
        iconCross.setAttribute('class', 'icon-cross');
        secondListDiv.appendChild(todoContent);
        secondListDiv.appendChild(iconCross);
        listItem.appendChild(secondListDiv);
        todoList.appendChild(listItem);
    }
    listItems = document.getElementsByClassName('list-item');
    todoItems = document.getElementsByClassName('todo-item');
    registerListItems();
    registerTodoItems();
}
function displayCompletedItems(){
    for(let todo of todos){
        let listItem = document.createElement('li');
        if(todo.active){
            listItem.setAttribute('class', 'todo-item active');
            listItem.style.display = 'none';
            let firstListDiv = document.createElement('div');
            firstListDiv.setAttribute('class', 'check-icon')
            listItem.appendChild(firstListDiv);
        }else {
            listItem.setAttribute('class', 'todo-item completed');
            let iconCheck = document.createElement('img');
            iconCheck.setAttribute('src', 'images/icon-check.svg');
            let firstListDiv = document.createElement('div');
            firstListDiv.setAttribute('class', 'check-icon checked');
            firstListDiv.appendChild(iconCheck);
            listItem.appendChild(firstListDiv);
        }
        
        
        let secondListDiv = document.createElement('div');
        secondListDiv.setAttribute('class', 'list-item');
        let todoContent = document.createTextNode(todo.content);
        let iconCross = document.createElement('img');
        iconCross.setAttribute('src', 'images/icon-cross.svg');
        iconCross.setAttribute('class', 'icon-cross');
        secondListDiv.appendChild(todoContent);
        secondListDiv.appendChild(iconCross);
        listItem.appendChild(secondListDiv);
        todoList.appendChild(listItem);
    }
    listItems = document.getElementsByClassName('list-item');
    todoItems = document.getElementsByClassName('todo-item');
    registerListItems();
    registerTodoItems();
}

function registerListItems(){
    for(let item of listItems){
        item.onclick = function(){
            selectedItemText = item.innerText;
            todos = todos.filter(removeFromList);
            displayItemsLeft();
            todoList.innerHTML = '';
            displayListItems();
        }
    }
}
function registerTodoItems(){
    for(let item of todoItems){
        item.onclick = function(){

            if(item.className == 'todo-item active'){
                item.classList.remove('active');
                item.classList.add('completed');
                let iconCheck = document.createElement('img');
                iconCheck.setAttribute('src', 'images/icon-check.svg');
                let firstChild = item.firstChild;
                firstChild.classList.add('checked');
                item.firstChild.appendChild(iconCheck);
                let secondChild = item.childNodes[1];
                selectedItemText = secondChild.innerText;
                todos.forEach(updateTodoList);
                todoList.innerHTML = '';
                selectedItemText = '';
                displayListItems();
            }else if(item.className == 'todo-item completed'){
                item.classList.remove('completed');
                item.classList.add('active');
                item.firstChild.classList.remove('checked');
                item.firstChild.removeChild(item.firstChild.firstChild);
                let secondChild = item.childNodes[1];
                selectedItemText = secondChild.innerText;
                todos.forEach(updateTodoList);
                todoList.innerHTML = '';
                selectedItemText = '';
                displayListItems();
                
            }
        }
        
    }
}
function updateTodoList(item){
    if(item.content == selectedItemText ){
        
            item.active = !item.active;
        
      }
      refreshTabs();

}
function removeFromList(item){
    if(item.content !== selectedItemText ){
        return item;
      }
}
function clearCompleted(item){
    if(item.active){
        return item;
    }
}

todoInput.addEventListener("keypress", function(event) {
    // If the user presses the "Enter" key on the keyboard
    if (event.key === "Enter") {
      // Cancel the default action, if needed
      event.preventDefault();
      
    if(todoInput.value != ""){
        
        todos.push({
            content: todoInput.value, active: true
        });
        displayItemsLeft();
        todoInput.value = '';
        todoList.innerHTML = '';
        displayListItems();
        refreshTabs();
    }
    
    }
  });

//   let allItems = document.getElementById('all-items');
// let activeItems = document.getElementById('active-items');
// let completedItems = document.getElementById('completed-items');
  activeItems.onclick = function(){
    activeItems.classList.add('active-tab');
    allItems.classList.remove('active-tab');
    completedItems.classList.remove('active-tab');
    todoList.innerHTML = '';
    displayActiveItems();
  }

  allItems.onclick = function(){
    refreshTabs();
    todoList.innerHTML = '';
    displayListItems();
  }
  completedItems.onclick = function(){
    activeItems.classList.remove('active-tab');
    allItems.classList.remove('active-tab');
    completedItems.classList.add('active-tab');
    todoList.innerHTML = '';
    displayCompletedItems();
  }

clearCompletedBtn.onclick = function(){
    todos = todos.filter(clearCompleted);
    refreshTabs();
    todoList.innerHTML = ''
    displayListItems();
    displayItemsLeft();
}

function refreshTabs(){
    activeItems.classList.remove('active-tab');
    allItems.classList.add('active-tab');
    completedItems.classList.remove('active-tab');
}

// updateToList();
displayListItems();

