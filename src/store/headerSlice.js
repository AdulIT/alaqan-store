import {createSlice} from '@reduxjs/toolkit'

const headerSlice = createSlice({
    name: 'headerHeight',
    initialState: {
        headerHeight: '0px',
    },
    reducers: {
        changeHeaderHeight(state, action) {
            state.headerHeight = action.payload.computedHeaderHeight
        }
    }
});

export const {changeHeaderHeight} = headerSlice.actions

export default headerSlice.reducer