export const initialTasksState = {
  filter: "SHOW_ALL",
  tasks: []
};

const tasksReducer = (state = initialTasksState, action) => {
  // TODO: write this reducer
  switch (action.type) {
    case "TOGGLE_DONE":
      return {
        ...state,
        tasks: state.tasks.map((task) =>
          task.id === action.taskId
            ? { ...task, done: !task.done }
            : { ...task }
        )
      };
    case "CHANGE_FILTER":
      return { ...state, filter: action.newFilter };
    default:
      return state;
  }
};

export default tasksReducer;
