import {useEffect, useState} from 'react'
import {Account, OAuthProvider} from "appwrite"
// import { type Models } from 'appwrite';
import {client, app_url} from "@/config.ts";
import ErrorTip from "@/components/ErrorTip.tsx";

import "@/main.css"
import OauthButton from "@/components/OuathButton";

import {useNavigate} from "react-router-dom";


function Home() {
  const [showError, setShowError] = useState(false)
  const navigate = useNavigate();

  const account: Account = new Account(client);

  useEffect(() => {
    const url = new URL(window.location.href);
    if (url.searchParams.get("state") === "error") {
      setShowError(true);
    } else if (url.searchParams.get("state") === "success") {
      navigate("/")

    }


  }, [navigate])


  const Handle = async (type: keyof typeof OAuthProvider) => {
    account.createOAuth2Session(OAuthProvider[type], app_url + "/login?state=success", app_url + "/login?state=error")

  }


  return (
    <>
      <div className='flex justify-center h-screen items-center flex-col'>

        <OauthButton type="Discord" color="bg-blue-500" handle={Handle}/>
        <OauthButton type="Google" color="bg-red-500" handle={Handle}/>
        <OauthButton type="Github" color="bg-black" handle={Handle}/>

      </div>

      {/* 显示错误 */}
      <div className="justify-center items-center fixed flex w-full top-20 pd-transition">
        {showError && <ErrorTip message="Login Failed." setShowError={setShowError}/>}
      </div>
    </>
  )
}

export default Home
