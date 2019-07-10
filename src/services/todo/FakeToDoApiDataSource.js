import toDosFakeResponse from './todos.json';
import ToDoConverter from './ToDoConverter';

class FakeToDoApiDataSource {
  static getToDos() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const ToDo = new ToDoConverter().mapperResponsesToEntities(
          toDosFakeResponse,
        );

        resolve(ToDo);
      }, 2000);
    });
  }

  static createToDo(todo) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        new ToDoConverter().mapperEntityToRequest(todo);

        resolve(todo);
      }, 2000);
    });
  }

  static removeToDo(todo) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        new ToDoConverter().mapperEntityToRequest(todo);

        resolve(todo);
      }, 2000);
    });
  }
}

export default FakeToDoApiDataSource;
