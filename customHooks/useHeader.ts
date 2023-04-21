import { signOut } from "firebase/auth";
import { auth } from "../config/database"
import { useRouter } from "next/router";
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from "react-toastify";


const useHeader = () => {


  const router = useRouter();
  const [user, loading,error] = useAuthState(auth);
  const userEmail = user?.email;
  const userName = user?.displayName;
  const userPhoto = user?.photoURL;


  const logout = () => {
    signOut(auth).then(() => {
      toast.info('Successfully Logout!', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
    
  });
  router.push('/')
    }).catch((error) => {
      console.log(error);

    });
  }
  const loginpage = () => {
    router.push('/Login')

  }
  const uploadpage = () => {
    router.push('/Upload')

  }
 
  const chartingpage = () => {
    router.push('/Cart')
  } 
 
  const homepage = () => {
    router.push('/')
  }
  const storepage = () => {
    router.push('/store')
  }
  const profilepage = () => {
    router.push('/Profile')
  }
   
  return {
    logout,
    loginpage,
    userEmail,
    userName,
    userPhoto,
    loading,
    user,
    uploadpage,
    homepage,
    chartingpage,
    profilepage,
    storepage,
  }
    
  
}

export default useHeader