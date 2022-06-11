import { createSlice, PayloadAction, configureStore } from '@reduxjs/toolkit'
import { env } from 'lib/env'

// Env
export type EnvTypes = {
    mobile: boolean
}

const initialEnv: EnvTypes = {
    mobile: true
}

export const EnvSlice = createSlice({
    name: 'env',
    initialState: initialEnv,
    reducers: {
        update(state: EnvTypes) {
            return {
                mobile: env('mobile') as boolean
            }
        }
    }
})

// ConfigureStore
export const store = configureStore({
    reducer: {
        env: EnvSlice.reducer
    }
})