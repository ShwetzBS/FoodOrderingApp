//...REDUX STORE....
import { configureStore } from "@reduxjs/toolkit";
import CartSliceReducer from "./CartSliceRedux"; //Default export give any name

export const AppStore = configureStore({
  //This reducer is the main reducer of the REDUX STORE which is inturn a combination of reducers of the different slices in the store
  //This reducer is used to modify the Whole Redux Store
  reducer: {
    CartSlice: CartSliceReducer, //This is a small reducer .Basically that of the slices

    // You can have as many slice reducers as you want here
    //Eg : user : userReducer (Just crearte a reducer for this user in your say usersliceredux.js and import it here .
    // Mind you everything (all different slices ) need to go in AppStore.js only cuz you have PROVIDED (<Provider/> it to our App.js ie the root of this WHOLE swiggy aPP ))
  },
});
