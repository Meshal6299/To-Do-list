export default function uiController(app) {
  const projectsList = document.querySelector('.projects-list');
  const todoList = document.querySelector('.todo-list');
  const addProjectBtn = document.getElementById('add-project-btn');
  const addTodoBtn = document.getElementById('add-todo-btn');
  const clearProjectsBtn = document.getElementById('clear-projects-btn');

  function renderProjects() {
    projectsList.innerHTML = '';
    app.getProjects().forEach((project, index) => {
      const projectItem = document.createElement('div');
      projectItem.textContent = project.name;
      projectItem.classList.add('project-item');
      projectItem.addEventListener('click', () => {
        document.querySelectorAll('.project-item').forEach(item => item.classList.remove('selected'));
        projectItem.classList.add('selected');
        renderTodos(index);
      });
      projectsList.appendChild(projectItem);
    });
  }

  function renderTodos(projectIndex) {
    todoList.innerHTML = '';
    const project = app.projects[projectIndex];
    project.todos.forEach((todo) => {
      const todoItem = document.createElement('div');
      todoItem.textContent = `${todo.title} - Due: ${todo.dueDate.toDateString()} - Priority: ${todo.priority}`;
      todoItem.classList.add('todo-item');
      todoList.appendChild(todoItem);
    });
  }

  addProjectBtn.addEventListener('click', () => {
    const projectName = prompt('Enter project name:');
    if (projectName) {
      app.addProject(projectName);
      renderProjects();
    }
  });

  addTodoBtn.addEventListener('click', () => {
    const projectIndex = prompt('Enter project index to add todo:');
    const title = prompt('Enter todo title:');
    const dueDate = new Date(prompt('Enter due date (YYYY-MM-DD):'));
    const priority = prompt('Enter priority (low, medium, high):');
    if (projectIndex !== null && title && dueDate && priority) {
      const project = app.projects[projectIndex];
      if (project) {
        project.addTodo([title, dueDate, priority]);
        renderTodos(projectIndex);
      }
    }
  });

  return {
    renderProjects,
    renderTodos,
  };
}