import { useState,useEffect } from 'react';
import { fetchData, deletedata, updatedata } from "../store/DataSlice";
import { useSelector, useDispatch } from "react-redux";
import { useRouter, } from "next/router";
import { db,auth} from "../config/database";
import {doc,setDoc} from "firebase/firestore";
import { fetchCart, deleteCart } from "../store/CartSlice";
import { useAuthState } from 'react-firebase-hooks/auth';

const useCard = () => {

    const router = useRouter();
    const dispatch = useDispatch();
    const storedata: any = useSelector((store: any) => store.DataSlice.data)
    const [selects, setselects] = useState("")
    const [serachtext, setserachtext] = useState<string>("")
    const [isOpen, setIsOpen] = useState(false);
    const [quantity, setQuantity] = useState(1);
    const [toggle, settoggle] = useState(false)
    const [toggle1, settoggle1] = useState(false)
    const [toggle2, settoggle2] = useState(false)
    const [user] = useAuthState(auth);
    const [price, setprice] = useState("")
    const [title, settitle] = useState("")
    const [descrition, setdescrition] = useState("")
    const [re, setre] = useState({})
    const [loader, setloader] = useState(true)
  const [currentItem, setCurrentItem] = useState(null);
    


    useEffect(() => {
        getdata();
        
    },);
 
    const getdata = async () => {
        try {
            dispatch<any>(fetchData());
        } catch (error) {
            console.log('================catch====================');
            console.log(error);
            console.log('====================================');
        } finally {

        }
    }

    const togglePopover = (item:any) => {
        setCurrentItem(item)
        console.log(currentItem);
        setIsOpen(true);
        console.log(isOpen);
        
    };
  

    const handleClose = () => {
        setIsOpen(false);
    };

    const handleQuantityChange = (event: any) => {
        setQuantity(event.target.value)
        
    };
    const toid = (id: any) => {
        router.push(`/store/${id}`)
    }
    const cancel = async (item: any) => {
        try {
            dispatch<any>(deletedata(item));
            dispatch<any>(deleteCart(item));
        } catch (error) {
            console.log('================catch====================');
            console.log(error);
            console.log('====================================');
        }
    }

    const update = (item: any) => {
        settoggle(true)
        settitle(item.title)
        setprice(item.price)
        setdescrition(item.descrition)
        setre(item)
    }
    const update1 = (item: any) => {
        settoggle1(true)
        settitle(item.title)
        setprice(item.price)
        setdescrition(item.descrition)
        setre(item)
    }   
     const update2 = (item: any) => {
        settoggle2(true)
        settitle(item.title)
        setprice(item.price)
        setdescrition(item.descrition)
        setre(item)
    }
    const onEditHandler = async () => {
        try {
            const resultAction: any = await dispatch<any>(updatedata({
                ...re,
                title: title,
                price: price,
                descrition: descrition,
            }));
            const updateddata = resultAction.payload;
            settoggle(true);
            settitle("");
            setprice("");
            setre({});
            return updateddata;

        } catch (error) {
            console.log("error", error);
        } finally {
            settoggle(false)
            settoggle1(false)
            settoggle2(false)
        }
    };

    const Cart = async (item: any) => {
        setloader(false)
        try {
            const uid = await localStorage.getItem("uid")
            const newinput1: any = {
                title: item.title,
                price: item.price,
                attachmentURL: item.attachmentURL,
                descrition:item.descrition,
                gender:item.gender,
                quantity,
                customer: uid,
                id:item.id,
                creator:item.creator,
            }  
            await setDoc(doc(db, "cart", item.id), newinput1);
        }
        catch (e) {
            console.error(e);
        }finally{
            setloader(true)
        }
    }
    const loginpage = () => {
        router.push('/Login')
    
      }



    return {
        toid,
        handleQuantityChange,
        handleClose,
        togglePopover,
        setserachtext,
        update,
        onEditHandler,
        cancel,
        setselects,
        setprice,
        settitle,
        setdescrition,
        Cart,
        loginpage,
        update1,
        update2,
        toggle1,
        toggle2,
        loader,
        quantity,
        isOpen,
        storedata,
        selects,
        serachtext,
        descrition,
        price,
        title,
        toggle,
        currentItem,
        re,
       user,  
    }


};

export default useCard;