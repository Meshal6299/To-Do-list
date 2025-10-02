export default function createTodo(title, dueDate, priority) {
    return {
      id: crypto.randomUUID(), 
      title, 
      dueDate, 
      priority, 
      completed: false,
      
      toggleComplete() {
        this.completed = !this.completed;
      }
    };
}