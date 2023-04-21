import { useRouter } from "next/router";
import { useState } from "react"
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { doLogin } from "@/store/AuthSlice";


const useLogin = () => {

    const [email, setemail] = useState("")
    const [password, setpassword] = useState("")
    const [loader, setloader] = useState(true)
    const [error, seterror] = useState("")
    const router = useRouter();
    const [loginError, setLoginError] = useState('')
    const dispatch=useDispatch()


    const onSubmitHandler = async () => {
        if (!email || !password) {
          seterror('Please fill the field properly')
        } else {
          try {
            setloader(false)
            dispatch<any>(doLogin({ email, password })).then((res: any) => {
              if (res.payload && res.payload.user) {
                toast.success('Successfully signed in!', {
                  position: 'top-right',
                  autoClose: 5000,
                  hideProgressBar: false,
                  closeOnClick: true,
                  pauseOnHover: true,
                  draggable: true,
                  progress: undefined,
                  theme: 'dark',
                })
                setloader(true)
                router.push('/')
              } else {
                setLoginError('Incorrect email or password')
              }
            })
          } catch (e) {
            console.log('Error:', e)
          } finally {
            setloader(true)
          }
        }
      }
    const signpage = async () => {
        router.push('/Signup')
    }


    return  {
        signpage,
        onSubmitHandler,
        setemail,
        setpassword,
        email,
        password,
        error,
        loader,
        loginError
    }              
                                       
}

export default useLogin