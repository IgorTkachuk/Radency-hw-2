import { createSlice } from "@reduxjs/toolkit";

export const todoSlice = createSlice({
  name: "todo",
  initialState: [
    {
      name: "Shopping list",
      created: "2021.06.11",
      category: "Task",
      content: "Tomatoes, bread",
      dates: [],
      _id: 1,
      _archived: false,
    },
    {
      name: "The theory of evolution",
      created: "2021.06.11",
      category: "Random Thought",
      content: "The evolution...",
      dates: [],
      _id: 2,
      _archived: false,
    },
    {
      name: "New Feature",
      created: "2021.06.11",
      category: "Idea",
      content: "Implement new ...",
      dates: [],
      _id: 3,
      _archived: false,
    },
  ],
  reducers: {
    addNote: (state, action) => {
      state.push(action.payload);
    },
    removeNote: (state, action) => {
      console.log(action);
      const idx = state.findIndex((el) => el._id === action.payload);
      state.splice(idx, 1);
    },
    updateNote: (state, action) => {
      const { _id, ...rest } = action.payload;
      const idx = state.findIndex((el) => el._id === _id);
      state[idx] = {
        ...state[idx],
        ...rest,
      };
    },
    archiveNote: (state, action) => {
      const idx = state.findIndex((el) => el._id === action.payload);
      state[idx]._archived = !state[idx]._archived;
    },
  },
});

export const { addNote, removeNote, updateNote, archiveNote } =
  todoSlice.actions;
export default todoSlice.reducer;
