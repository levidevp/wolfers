import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { db } from "../config/database";
import {collection,getDocs,deleteDoc,doc} from "firebase/firestore";


export const fetchBuyer = createAsyncThunk("fetchBuyer/DataTodo", async () => {

  try {
    const querySnapshot = await getDocs(collection(db, "Buyed"));
    let datalist: any = []
    querySnapshot.forEach((doc) => {
      datalist.push({
        id: doc.id,
        title: doc.data().title,
        price: doc.data().price,
        creator: doc.data().creator,     
        customer:doc.data().customer,
        quantity:doc.data().quantity,
        userEmail:doc.data().userEmail,
        userName:doc.data().userName,
      });
    });
    return datalist;

  } catch (error) {
    console.log("================catch====================");
    console.log(error);
    console.log("====================================");
  }
});
export const deleteBuyer = createAsyncThunk('deleteBuyer/DataTodo', async (item: any) => {
  try {
    
    await deleteDoc(doc(db, "Buyed", item.id));
    return item
  } catch (error) {
    console.log("error", error);
  }

})



const BuyerSlice = createSlice({
  name: "Buyer",
  initialState: { Buyer: [], error: null, },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchBuyer.fulfilled, (state, action) => {
      let newState: any = {
        ...state,
        Buyer: action.payload,
      };
      return newState;
    });
    builder.addCase(deleteBuyer.fulfilled, (state, action) => {
      const data = state.Buyer;
      const item = action.payload;
      let filtereddata = data.filter((data1: any) => item.id !== data1.id)
      let newState: any = {
        ...state,
        Buyer: filtereddata,
      };
      return newState;
    });
}, 
});


export default BuyerSlice.reducer;
