import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { db,storage } from "../config/database";
import { ref,deleteObject } from "firebase/storage"
import {collection,getDocs,deleteDoc,doc,updateDoc} from "firebase/firestore";


export const fetchData = createAsyncThunk("data/DataTodo", async () => {

  try {
    const querySnapshot = await getDocs(collection(db, "products"));
    let datalist: any = []
    querySnapshot.forEach((doc) => {
      datalist.push({
        id: doc.id,
        title: doc.data().title,
        price: doc.data().price,
        descrition:doc.data().descrition,
        attachmentURL: doc.data().attachmentURL,
        creator: doc.data().creator,       
        gender: doc.data().gender,
        carousel: doc.data().carousel,
        
      });
    });
    return datalist;

  } catch (error) {
    console.log("================catch====================");
    console.log(error);
    console.log("====================================");
  }
});
export const deletedata = createAsyncThunk('deletedata/DataTodo', async (item: any) => {
  try {

    const desertRef = ref(storage, `products/${item.id}`);
    await deleteObject(desertRef)
    await deleteDoc(doc(db, "products", item.id));
    return item
  } catch (error) {
    console.log("error", error);
  }

})
export const updatedata= createAsyncThunk('updatedata/DataTodo', async (item: any) => {
try {
  const dataRef = doc(db, 'products', item.id);
  await updateDoc(dataRef, item);
  return item;
} catch (error) {
  console.log("error", error);
}
})


const DataSlice = createSlice({
  name: "data",
  initialState: { data: [], error: null, },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchData.fulfilled, (state, action) => {
      let newState: any = {
        ...state,
        data: action.payload,
      };
      return newState;
    });
    builder.addCase(deletedata.fulfilled, (state, action) => {
      const data = state.data;
      const item = action.payload;
      let filtereddata = data.filter((data1: any) => item.id !== data1.id)
      let newState: any = {
        ...state,
        data: filtereddata,
      };
      return newState;
    });
    builder.addCase(updatedata.fulfilled, (state, action) => {
      const todos = state.data;
      const updateddata = action.payload;
      const updatedTodos = todos.map((item: any) =>
        item.id === updateddata.id ? updateddata : item
      );
      let newState: any = {
        ...state,
        data: updatedTodos,
      };
      return newState;
    });






  }, 
});


export default DataSlice.reducer;
