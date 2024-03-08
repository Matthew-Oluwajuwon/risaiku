const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
  authToken: null,
  current: 0
};

const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    setAllAppKeys: (state, action) => {
      state = action.payload;
      return state;
    },
    setAppKey: (state, action) => {
      state = {
        ...state,
        [action.payload.key]: action.payload.value,
      };
      return state;
    },
  },
});

export const { setAllAppKeys, setAppKey } = appSlice.actions;

export const appReducer = appSlice.reducer;
