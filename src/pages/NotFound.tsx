import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="justify-center items-center flex h-screen w-full bg-cyan-200 flex-col">
      <h1 className="text-3xl" >404 Not Found</h1>
      <Link className="my-2 text-blue-500 hover:text-" to="/">Back to Home</Link>
    </div>
  )
}
export default NotFound;