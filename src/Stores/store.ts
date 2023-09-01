import { combineReducers, configureStore } from "@reduxjs/toolkit";
import authReducer from "@anStore/authStore.ts";
import anReducer from "@anStore/anStore.ts";

const store = configureStore({
    reducer: combineReducers({
        authReducer,
        anReducer: anReducer
    }),
});

export default store;