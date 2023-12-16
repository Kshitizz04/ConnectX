import { createSlice} from "@reduxjs/toolkit";

const initialState = {
  count: 0,
};

const userPreferenceSlice = createSlice({
    name: "userPreference",
    initialState,
    reducers: {
        increment(state, action){
            state.count++;
        }
    }
})

export const { increment } = userPreferenceSlice.actions;

export default userPreferenceSlice.reducer;