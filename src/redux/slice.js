import { createSlice } from '@reduxjs/toolkit';
import { combineReducers } from '@reduxjs/toolkit';

export const itemSlice = createSlice({
    name: 'items',
    initialState: [],
    reducers: {
        addContacts(state, action) {
            state.push(action.payload);
        },
        removeContacts(state, action) {
            const items = state.filter(
                contact => contact.id !== action.payload
            );
            return (state = items);
        },
    },
});

export const filterSlice = createSlice({
    name: 'filter',
    initialState: '',
    reducers: {
        setFilter(state, action) {
            return (state = action.payload);
        },
    },
});

const items = itemSlice.reducer;
const filter = filterSlice.reducer;
export const myCombineReduser = combineReducers({
    items,
    filter,
});

export const { addContacts, removeContacts } = itemSlice.actions;
export const { setFilter } = filterSlice.actions;
