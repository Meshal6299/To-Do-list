import createTodo from "./todo";

export default function createProject(name) {
    return {
      id: crypto.randomUUID(),
      name,
      todos: [],
      addTodo(todoData){
        const todo = createTodo(...todoData);
        this.todos.push(todo);
        return todo;
      },
    };
}