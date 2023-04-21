import { useState, ChangeEvent } from "react";
import { db, storage,auth } from "../config/database";
import {ref,uploadBytes,getDownloadURL,} from "firebase/storage";
import {doc,setDoc,} from "firebase/firestore";
import { useAuthState } from 'react-firebase-hooks/auth';
import { useRouter, } from "next/router";




const useUpload = () => {

    const [title, settitle] = useState("")
    const [price, setprice] = useState("")
    const [descrition, setdescrition] = useState("")
    const [imagepic, setimagepic] = useState<any>({})
    const [creator, setcreator] = useState("")
    const [gender, setgender] = useState("Men")
    const [carousel, setcarousel] = useState("Carousel")
    const [serachtext, setserachtext] = useState<string>("")
    const [loader, setloader] = useState(true)
    const [error, seterror] = useState<string>('')
    const [previewImage, setpreviewImage] = useState<string | undefined>(undefined);
    const [user,loading] = useAuthState(auth);
    const router = useRouter();
 
    const save = async () => {

        if (!imagepic || !price || !title || !descrition) {
            seterror("please fill the field properly")
        } else {
            setloader(false)
            try {
                const id1: string = Date.now().toString()
                const creatorUid: any = await localStorage.getItem("uid")
                const storageRef = ref(storage, `/products/${id1}`);
                const result = await uploadBytes(storageRef, imagepic)
                const downloadURL = await getDownloadURL(result.ref)
                const newinput: any = {
                    title,
                    price,
                    attachmentURL: downloadURL,
                    creator: creatorUid,
                    gender,
                    carousel:carousel,
                    descrition,
                    isHovered: false,
                    id:id1
                }

               await setDoc(doc(db, "products", id1), newinput);
            }
            catch (e) {
                console.error(e);
            }
        }
        settitle("")
        setcreator("")
        setprice("")
        setdescrition("")
        setimagepic({})
        setloader(true)
    }
    const savefile = async (e: ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
    
        if (file) {
            // Check if file is PNG
            if (file.type !== 'image/png') {
                alert('Please select a PNG image.');
                return;
            }
    
            // Preview image
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onloadend = () => {
                setimagepic(file);
                setpreviewImage(reader.result as string);
            };
        } else {
            alert('No image selected.');
        }
    };
    
    const loginpage = () => {
        router.push('/Login')

    }
 

    return {
        save,
        savefile,
        setprice,
        settitle,
        setserachtext, 
        setgender,
        setcarousel,
        setdescrition,
        setpreviewImage,
        loginpage,
         previewImage,
        descrition,
        title,
        price,
        serachtext,
        gender,
        carousel,
        loader,
        error,
        user,
        loading,   
    }
}
export default useUpload