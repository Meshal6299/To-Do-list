import createProject from "./project.js";

export default function storage() {
  const KEY = "todoApp";

  function save(projects) {
    localStorage.setItem(KEY, JSON.stringify(projects));
  }

  function load() {
    const data = localStorage.getItem(KEY);
    if (!data) return [];

    return JSON.parse(data).map(p => {
      const project = createProject(p.name);
      p.todos.forEach(t => {
        project.addTodo([t.title, new Date(t.dueDate), t.priority]);
      });
      return project;
    });
  }

  function clear() {
    localStorage.removeItem(KEY);
  }

  return { save, load, clear };
}
