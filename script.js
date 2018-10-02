var todoList = {
    todos: [],
    addTodo: function(todoText) {
        this.todos.push({
            todoText: todoText,
            completed: false
        });
    },
    /* changeTodo: function(position, todoText) {
       this.todos[position].todoText = todoText;
     },*/
    deleteTodo: function(position) {
        this.todos.splice(position, 1);
    },

};

var handlers = {
    addTodo: function() {
        var addTodoTextInput = document.getElementById('addTodoTextInput');
        todoList.addTodo(addTodoTextInput.value);
        addTodoTextInput.value = '';
        view.displayTodos();
    },

    deleteTodo: function(position) {
        todoList.deleteTodo(position);
        view.displayTodos();
    },

};

var view = {
    displayTodos: function() {
        var todosUl = document.querySelector('ul');
        todosUl.innerHTML = '';

        todoList.todos.forEach( function(todo, position) {
            var todoLi = document.createElement('li');
            var todoTextWithCompletion = '';



            todoTextWithCompletion = todo.todoText;

            todoLi.id = position;
            todoLi.textContent = todoTextWithCompletion;
            todoLi.appendChild(this.createDeleteButton());
            todosUl.appendChild(todoLi);
        }, this);
    },
    createDeleteButton: function() {
        var deleteButton = document.createElement("button");
        deleteButton.textContent = "X";
        deleteButton.className = "deleteButton";
        return deleteButton
    },
    setUpEventListeners: function() {
        var todosUl = document.querySelector("ul");

        todosUl.addEventListener("click", function(event) {
            var elementClicked = event.target;

            if(elementClicked.className === "deleteButton") {

                handlers.deleteTodo(parseInt(event.target.parentNode.id));
                view.displayTodos();

            }
        });
    }
};

view.setUpEventListeners();