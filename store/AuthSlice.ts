import { getAuth, isSignInWithEmailLink, signInWithEmailLink } from "firebase/auth";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { auth, db, storage } from "../config/database"
import { collection, addDoc } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL, } from "firebase/storage"
import { sendSignInLinkToEmail } from "firebase/auth";
import { updateProfile, createUserWithEmailAndPassword, signInWithEmailAndPassword, sendEmailVerification } from "firebase/auth"


export const doSignup = createAsyncThunk("auth/signup", async (item: any) => {
    try {
        // save user img
        const storageRef = ref(storage, `/usersImages/${item.email}`);
        const result = await uploadBytes(storageRef, item.imagepic)
        const downloadURL = await getDownloadURL(result.ref)

        // create user account
        const res = await createUserWithEmailAndPassword(auth, item.email, item.password);
        console.log("res user", res.user);
        console.log("-----------------------");
        console.log("res user", res.user);
        if (res.user && res.user.emailVerified === false) {
            await sendEmailVerification(res.user)
            console.log("wd,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,");
            
        }
        // save name and img
        await updateProfile(res.user, {
            displayName: item.username,
            photoURL: downloadURL,
        });
        // adding user to doc
        const userAdding = {
            Name: item.username,
            email: item.email,
            uid: res.user.uid,
            photoURL: downloadURL,
        };
        await addDoc(collection(db, "users"), userAdding);

        return { email: item.email, username: item.username };
    } catch (error) {
        console.log("error", error);
    }
});

export const doLogin = createAsyncThunk("auth/login", async (item: any) => {
    try {

        const res = await signInWithEmailAndPassword(auth, item.email, item.password)
        // getting his uid
        const user: any = res.user
        const uid = user.uid
        localStorage.setItem("uid", uid);
        return res;
    } catch (error) {
        console.log("error", error);
    }
});

// Define your slice
const AuthSlice = createSlice({
    name: "auth",
    initialState: {
        user: null,
        error: null,
        singupUser: {},
        data: [],
        currentUserRequestLoader: true,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(doSignup.fulfilled, (state, action) => {
            let newState: any = {
                ...state,
                singupUser: action.payload,
            };
            return newState;
        });

        builder.addCase(doLogin.fulfilled, (state, action) => {
            if (action.payload?.user) {
                let newState: any = {
                    ...state,
                    user: action.payload.user,
                };
                return newState;
            }
            return {
                ...state
            };
        });
    },
});

// Export the reducer
export default AuthSlice.reducer;