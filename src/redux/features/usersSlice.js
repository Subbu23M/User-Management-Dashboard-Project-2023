import {
    createSlice,
    createAsyncThunk
} from "@reduxjs/toolkit"
import swal from "sweetalert"

const initialState = {
    usersData: [],
    isLoading: false,
    erroMessage: null
}

// Create thunk
export const fetchUsersByUrl = createAsyncThunk(
    'users/path',
    // API call
    async () => {
        try {
            const baseUrl = 'https://jsonplaceholder.typicode.com/users'
            const response = await fetch(baseUrl)
            const data = await response.json()
            return data
        } catch (error) {
            swal(error.message)
        }
    }
)

const usersSlice = createSlice({
    name: 'USERS',
    initialState,
    extraReducers: (builder) => {
        builder
            .addCase(fetchUsersByUrl.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(fetchUsersByUrl.fulfilled, (state, action) => {
                state.isLoading = false;
                state.usersData = action.payload;
            })
            .addCase(fetchUsersByUrl.rejected, (state) => {
                state.isLoading = false;
                state.erroMessage = 'network-issue';
            });
    },
});

export default usersSlice.reducer