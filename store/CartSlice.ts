import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { db } from "../config/database";
import {collection,getDocs,deleteDoc,doc} from "firebase/firestore";


export const fetchCart = createAsyncThunk("fetchCart/DataTodo", async () => {

  try {
    const querySnapshot = await getDocs(collection(db, "cart"));
    let datalist: any = []
    querySnapshot.forEach((doc) => {
      datalist.push({
        id: doc.id,
        title: doc.data().title,
        price: doc.data().price,
        descrition:doc.data().descrition,
        attachmentURL: doc.data().attachmentURL,
        creator: doc.data().creator,     
        customer:doc.data().customer,
        gender: doc.data().gender,
        carousel: doc.data().carousel,
        quantity:doc.data().quantity,
      });
    });
    return datalist;

  } catch (error) {
    console.log("================catch====================");
    console.log(error);
    console.log("====================================");
  }
});
export const deleteCart = createAsyncThunk('deleteCart/DataTodo', async (item: any) => {
  try {
    
    await deleteDoc(doc(db, "cart", item.id));
    return item
  } catch (error) {
    console.log("error", error);
  }

})



const CartSlice = createSlice({
  name: "Cart",
  initialState: { Cart: [], error: null, },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchCart.fulfilled, (state, action) => {
      let newState: any = {
        ...state,
        Cart: action.payload,
      };
      return newState;
    });
    builder.addCase(deleteCart.fulfilled, (state, action) => {
        
      const data = state.Cart;
      const item = action.payload;
      if(item){
      let filtereddata = data.filter((data1: any) => item.id !== data1.id)
      let newState: any = {
        ...state,
        Cart: filtereddata,
      };
      return newState;
    }
});
}, 
});


export default CartSlice.reducer;
