import { createAsyncThunk } from "@reduxjs/toolkit";
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    GoogleAuthProvider,
    signInWithPopup,
} from "firebase/auth";
import auth from "../firebase/firebase.config";


const serializeUser = (user) => ({
    uid: user.uid,
    email: user.email,
    displayName: user.displayName,
    photoURL: user.photoURL,
    emailVerified: user.emailVerified,
});


export const registerThunk = createAsyncThunk(
    "auth/register",
    async ({ email, password }, { rejectWithValue }) => {
        try {
            const result = await createUserWithEmailAndPassword(auth, email, password);
            return serializeUser(result.user);
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);


export const loginThunk = createAsyncThunk(
    "auth/login",
    async ({ email, password }, { rejectWithValue }) => {
        try {
            const result = await signInWithEmailAndPassword(auth, email, password);
            return serializeUser(result.user);
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);


export const logoutThunk = createAsyncThunk(
    "auth/logout",
    async (_, { rejectWithValue }) => {
        try {
            await signOut(auth);
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);


export const googleThunk = createAsyncThunk(
    "auth/google",
    async (_, { rejectWithValue }) => {
        try {
            const provider = new GoogleAuthProvider();
            const result = await signInWithPopup(auth, provider);
            return serializeUser(result.user);
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);
