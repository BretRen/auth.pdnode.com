import {type Dispatch, type SetStateAction, useEffect} from "react";

type ErrorTipProps = {
  message: string,
  setShowError: Dispatch<SetStateAction<boolean>>
}

function ErrorTip({message, setShowError}: ErrorTipProps) {
  useEffect(() => {
    setTimeout(() => {
      setShowError(false);
    }, 3000)
  })
  return (
    <div className=" flex justify-center items-center bg-red-400 p-4 text-white rounded-2xl">
      {message}
    </div>
  )
}

export default ErrorTip;