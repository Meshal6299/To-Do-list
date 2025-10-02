import createProject from "./project";
import storage from "./storage.js";

const appController = (() => {
  const localStorage = storage();
  let projects = localStorage.load();

  function addProject(name) {
    const newProject = createProject(name);
    projects.push(newProject);
    localStorage.save(projects);
    return newProject;
  }
  
  function getProjects() {
    return projects;
  }

  function addTodoToProject(projectId, todo) {
    projects[projectId].addTodo(todo);
    localStorage.save(projects);
  }

  function clearAllProjects() {
    projects = []
    localStorage.clear();
  }


  return {
    projects,
    addProject,
    getProjects,
    addTodoToProject,
    clearAllProjects
  }
})();

export default appController;