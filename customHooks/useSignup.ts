import { useRouter } from "next/router";
import { useEffect, useState } from "react"
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { auth } from "../config/database";
import { doSignup } from "@/store/AuthSlice";
import { useAuthState } from 'react-firebase-hooks/auth';
const useSignup = () => {

    const dispatch=useDispatch()
    const [username, setusername] = useState<string>("")
    const [email, setemail] = useState("")
    const [password, setpassword] = useState("")
    const router = useRouter();
    const [loader, setloader] = useState(true)
    const [imagepic, setimagepic] = useState<any>({})
    const [error, seterror] = useState("")
const [user] = useAuthState(auth);

    useEffect(() => {
        if (user&&user.emailVerified) {
            homepage();
        }
        
    },[user]);

    const onSubmitHandler = async () => {
        if (!username || !email || !password || !savefile) {
            seterror("please fill the field properly")
        } else {
            try {
                setloader(false)
                
                dispatch<any>(doSignup({email,password,username,imagepic}));
                // add toast
                toast.success('Successfully singup!', {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "dark"
                });      
                setloader(true)
                // error
            } catch (e) {
                toast.error('Uncomplete Error!', {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "colored"})
                console.log("------------------------------------");
                console.log(e);
                console.log("------------------------------------");
            }finally{
            setloader(true)
            }
        }
    }
    const savefile = async (e: any) => {
        if (null != e.target.files) {
            setimagepic(e.target.files[0])
        } else {
            alert("the selected picture is null")
        }
    }

    const loginpage = () => {
        router.push('/Login')
    }
    const homepage =()=>{
        router.push('/')
    }


    return {
        onSubmitHandler,
        loginpage,
        savefile,
        setemail,
        setpassword,
        setusername,
        setimagepic,
        email,
        password,
        username,
        loader,
        error,
    }
                      
}

export default useSignup