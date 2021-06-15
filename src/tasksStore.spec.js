import { createStore } from "redux";
import tasksReducer from "./tasksReducer";
import { changeFilter, toggleTaskDone } from "./tasksActions";

describe("tasksStore", () => {
  let store = null;
  const initialTasksState = {
    filter: "SHOW_ALL",
    tasks: [
      { id: 1, title: "Learn HTML", done: true },
      { id: 2, title: "Learn React", done: false },
      { id: 3, title: "Learn Redux", done: false }
    ]
  };

  beforeEach(() => {
    store = createStore(tasksReducer, initialTasksState);
  });

  describe("when a non-valid action is dispatched", () => {
    it("should return a default state", () => {
      store.dispatch({ type: "NOT_VALID" });
      expect(store.getState()).toBe(initialTasksState);
    });
  });

  describe("when changeFilter action is dispatched", () => {
    it("should change the 'filter' property of the state", () => {
      expect(store.getState().filter).toBe("SHOW_ALL");
      store.dispatch(changeFilter("SHOW_TODO"));
      expect(store.getState().filter).toBe("SHOW_TODO");
    });
  });

  describe("when toggleTaskDone action is dispatched", () => {
    it("should toggle the 'done' property of the given taskId", () => {
      expect(store.getState().tasks.find((t) => t.id === 2).done).toBe(false);
      store.dispatch(toggleTaskDone(2));
      expect(store.getState().tasks.find((t) => t.id === 2).done).toBe(true);
      store.dispatch(toggleTaskDone(2));
      expect(store.getState().tasks.find((t) => t.id === 2).done).toBe(false);
    });

    it("should not toggle the 'done' property of the other tasks", () => {
      expect(store.getState().tasks.find((t) => t.id === 2).done).toBe(false);
      store.dispatch(toggleTaskDone(1));
      expect(store.getState().tasks.find((t) => t.id === 1).done).toBe(false);
      expect(store.getState().tasks.find((t) => t.id === 2).done).toBe(false);
      expect(store.getState().tasks.find((t) => t.id === 3).done).toBe(false);
    });
  });
});
