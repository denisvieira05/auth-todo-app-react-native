import ToDoService from '../../../services/todo/ToDoService';
import {
  UPDATE_TODO_LIST,
  IS_FETCHING_TODO_LIST,
  IS_SAVING_TODO,
  TODO_WAS_SAVED,
  IS_REMOVING_TODO,
  TODO_WAS_REMOVED,
} from './HomeTypes';

export const updateToDoList = toDoList => ({
  type: UPDATE_TODO_LIST,
  payload: toDoList,
});

export const isFetchingToDoList = isFetching => ({
  type: IS_FETCHING_TODO_LIST,
  payload: isFetching,
});

export const isSavingToDo = isSaving => ({
  type: IS_SAVING_TODO,
  payload: isSaving,
});

export const isRemovingToDo = isRemoving => ({
  type: IS_REMOVING_TODO,
  payload: isRemoving,
});

export const toDoWasSaved = toDo => ({
  type: TODO_WAS_SAVED,
  payload: toDo,
});

export const toDoWasRemoved = toDo => ({
  type: TODO_WAS_REMOVED,
  payload: toDo,
});

// export const cleanToDoWasRemoved = toDo => ({
//   type: CONTACT_WAS_REMOVED,
//   payload: toDo
// });

export const loadToDoList = () => async (dispatch) => {
  dispatch(isFetchingToDoList(true));

  const toDoList = await new ToDoService().getToDoList();

  dispatch(updateToDoList(toDoList));
  dispatch(isFetchingToDoList(false));
};

export const saveToDo = toDo => async (dispatch) => {
  dispatch(isSavingToDo(true));

  const toDoAdded = await new ToDoService().saveTodo(toDo);

  dispatch(toDoWasSaved(toDoAdded));

  dispatch(isSavingToDo(false));
};

export const removeToDo = toDo => async (dispatch) => {
  dispatch(isRemovingToDo(true));

  const toDoRemoved = await new ToDoService().removeToDo(toDo);

  dispatch(toDoWasRemoved(toDoRemoved));

  dispatch(isRemovingToDo(false));
};
