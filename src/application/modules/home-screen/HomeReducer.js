import {
  UPDATE_TODO_LIST,
  IS_FETCHING_TODO_LIST,
  IS_SAVING_TODO,
  TODO_WAS_SAVED,
  IS_REMOVING_TODO,
  TODO_WAS_REMOVED,
} from './HomeTypes';

export const INITIAL_STATE = {
  toDoList: [],
  isFetchingToDoList: false,
  isSavingToDo: false,
  isRemovingToDo: false,
  toDoWasSaved: null,
  toDoWasRemoved: null,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UPDATE_TODO_LIST:
      return { ...state, toDoList: action.payload };
    case IS_FETCHING_TODO_LIST:
      return { ...state, isFetchingToDoList: action.payload };
    case IS_SAVING_TODO:
      return { ...state, isSavingToDo: action.payload };
    case IS_REMOVING_TODO:
      return { ...state, isRemovingToDo: action.payload };
    case TODO_WAS_SAVED:
      return toDoWasSavedAction(state, action.payload);
    case TODO_WAS_REMOVED:
      return toDoWasRemovedAction(state, action.payload)
    default:
      return state;
  }
};

const toDoWasSavedAction = (state, payload) => {
  if (payload) {
    let newToDoListAfterSaved = [...state.toDoList];

    if (hasToDoIdOnList(state.toDoList, payload)) {
      newToDoListAfterSaved = state.toDoList.map(
        obj => (payload.id === obj.id ? payload : obj),
      );
    } else {
      newToDoListAfterSaved = newToDoListAfterSaved.concat(payload);
    }

    return {
      ...state,
      toDoWasSaved: payload,
      toDoList: newToDoListAfterSaved,
    };
  }

  return {
    ...state,
    toDoWasSaved: payload,
  };
};

const toDoWasRemovedAction = (state, payload) => {
  if (payload) {
    const newToDoListAfterRemoved = [
      ...state.toDoList.filter(value => value !== payload)
    ];
    return {
      ...state,
      toDoWasRemoved: payload,
      toDoList: newToDoListAfterRemoved,
    };
  }

  return {
    ...state,
    toDoWasRemoved: payload,
  };
};

const hasToDoIdOnList = (toDoList, savedToDo) => {
  let hasToDo = false;

  toDoList.forEach((toDo) => {
    if (toDo.id === savedToDo.id) {
      hasToDo = true;
    }
  });

  return hasToDo;
};
