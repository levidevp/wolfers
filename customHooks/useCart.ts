import { useState, useEffect } from 'react';
import { fetchCart, deleteCart } from "../store/CartSlice";
import { useSelector, useDispatch } from "react-redux";
import { useRouter, } from "next/router";
import { doc, setDoc, } from "firebase/firestore";
import { db } from "../config/database";
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from "../config/database"
import { toast } from "react-toastify";


const useCart = () => {

    const router = useRouter();
    const dispatch = useDispatch();
    const storeCart: any = useSelector((store: any) => store.CartSlice.Cart)
    const [loader, setloader] = useState(true)
    const [user, loading, error] = useAuthState(auth);
    const userEmail = user?.email;
    const userName = user?.displayName;

    useEffect(() => {
        getdata()
    },);

    const getdata = async () => {
        try {
            dispatch<any>(fetchCart());
        } catch (error) {
            console.log('================catch====================');
            console.log(error);
            console.log('====================================');
        } finally {

        }
    }

    const cancelcart = async (item: any) => {
        try {
            dispatch<any>(deleteCart(item))
        } catch (error) {
            console.log('================catch====================');
            console.log(error);
            console.log('====================================');
        }
    }

    const Buyed = async (item: any) => {
        setloader(false)
        try {
            const uid = await localStorage.getItem("uid")
            const newinput1: any = {
                title: item.title,
                price: item.price,
                userName: userName,
                userEmail: userEmail,
                quantity: item.quantity,
                customer: uid,
                id: item.id,
                creator: item.creator,
            }
            await setDoc(doc(db, "Buyed", item.id), newinput1).then(() => {
                toast.info('Successfully buyed!', {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "dark",
                });
                dispatch<any>(deleteCart(item))
            })

        }
        catch (e) {
            console.error(e);
        } finally {
            setloader(true)
        }
    }

    const loginpage = () => {
        router.push('/Login')

    }

    return {
        loader,
        storeCart,
        cancelcart,
        Buyed,
        user,
        loading,
        loginpage,
    }


};

export default useCart;