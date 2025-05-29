import { createAsyncThunk } from "@reduxjs/toolkit";
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    GoogleAuthProvider,
    signInWithPopup,
} from "firebase/auth";
import auth from "../firebase/firebase.config";

// ✅ Helper: Only return serializable fields
const serializeUser = (user) => ({
    uid: user.uid,
    email: user.email,
    displayName: user.displayName,
    photoURL: user.photoURL,
    emailVerified: user.emailVerified,
});

// ✅ Register user
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

// ✅ Login user
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

// ✅ Logout user
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

// ✅ Login with Google
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
