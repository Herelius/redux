export const changeFilter = (newFilter) => ({
  type: "CHANGE_FILTER",
  newFilter
});

export const toggleTaskDone = (taskId) => ({
  type: "TOGGLE_DONE",
  taskId
});
