import {OAuthProvider} from "appwrite";

type OauthButtonProps = {
  type: keyof typeof OAuthProvider;
  handle?: (type: keyof typeof OAuthProvider) => void;
  color: string
}

function OauthButton({type, handle, color}: OauthButtonProps) {
  return (
    <button className={`text-white p-3 rounded-2xl flex flex-row m-1 ${color} sm:m-4 sm:p-5`}
            onClick={() => handle?.(type)}>
      <i className={`fa-brands fa-${type.toLowerCase()} text-xl sm:text-3xl`}></i>
      <p className="flex justify-center items-center mx-4"> Use {type} to Login in</p>
    </button>
  )
}

export default OauthButton;