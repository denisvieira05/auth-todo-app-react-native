import ServiceDataSource from "../ServiceDataSource";
import FakeToDoApiDataSource from "./FakeToDoApiDataSource";
import ToDoApiDataSource from "./ToDoApiDataSource";

class ToDoService extends ServiceDataSource {
  constructor() {
    super(FakeToDoApiDataSource, ToDoApiDataSource);
  }

  getToDoList() {
    return this.datasource().getToDoList();
  }

  saveTodo(todo) {
    return this.datasource().saveToDo(todo);
  }

  removeToDo(todo) {
    return this.datasource().removeToDo(todo);
  }
}

export default ToDoService;
