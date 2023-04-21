import {useEffect} from 'react';
import { fetchBuyer, deleteBuyer } from "../store/BuyerSlice";
import { useSelector, useDispatch } from "react-redux";
import { useRouter } from "next/router";


const useBuyer = () => {

    const router = useRouter();
    const dispatch = useDispatch();
    const storeBuyer: any = useSelector((store: any) => store.BuyerSlice.Buyer)
  


    useEffect(() => {
        getdata()
    },);
    const getdata = async () => {
        try {
            dispatch<any>(fetchBuyer());
        } catch (error) {
            console.log('================catch====================');
            console.log(error);
            console.log('====================================');
        } finally {

        }
    }
    const cancelBuyer = async (item: any) => {
        try {
            dispatch<any>(deleteBuyer(item))
        } catch (error) {
            console.log('================catch====================');
            console.log(error);
            console.log('====================================');
        }
    }
  

 


 





    return {
        storeBuyer,
        cancelBuyer,
    }


};

export default useBuyer;