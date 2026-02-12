import { createSlice } from "@reduxjs/toolkit";

const cartslice = createSlice({
    name: 'cart',
    initialState: {
        items: []
    },
    reducers: {
        additem: (state, action) =>
        {
            state.items.push(action.payload);
        },
        removeitem: (state) =>
        {
            state.items.pop();
        }
    }
});

export const { additem, removeitem } = cartslice.actions;
export default cartslice.reducer;