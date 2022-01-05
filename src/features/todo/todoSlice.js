import { createSlice } from '@reduxjs/toolkit';
import * as R from 'ramda';

const initialState = {
  objectives: [
    {
      id: -1,
      text: "Example objective",
      isComplete: false,
    }
  ]
};

const isMatchingObjective = (objective, id) => objective.id === id;

let uuid = 0;

export const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    add: (state, action) => {
      state.objectives = [
          ...state.objectives,
          {
              id: uuid,
              text: action.payload.text,
              isComplete: false
          }
      ]
      uuid++;
    },
    remove: (state, action) => {
      state.objectives = R.filter(objective => !isMatchingObjective(objective, action.payload.id), state.objectives);
    },
    setComplete: (state, action) => {
        state.objectives = R.map(objective => {
            if (isMatchingObjective(objective, action.payload.id)) {
              console.log('match')
                return {
                    ...objective,
                    isComplete: action.payload.isComplete,
                }
            }
            console.log('miss')
            return objective;
        }, state.objectives);
    },
  },
  //extraReducers: (builder) => {},
});

export const { add, remove, setComplete } = todoSlice.actions;

export default todoSlice.reducer;
