import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface IUserProps {
    email?: string;
    userId?: string | number
}

type IAuthStateProps = {
    token: string | null;
    user: IUserProps;
}

export const initialState:IAuthStateProps = {
    token: '',
    user: {
        email: '',
        userId:''
    }
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setToken(state: IAuthStateProps, { payload }: PayloadAction<string>) {
            state.token = payload;
        }
    }
})

export const {
    setToken
} = authSlice.actions

export default authSlice.reducer;