import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"

export default function Header(){
    const [elements] = useState(["Home", "About", "Contact"])
    const navigate = useNavigate()
    return (
        <div className=" w-screen h-20 bg-gray-400 font-mono flex items-center justify-between " >
            <div className=" ml-2 mr-2 text-3xl font-semibold" >
                Medium
            </div>
            <div className=" text-lg font-semibold  h-full w-1/3 flex items-center justify-between"  >
                {elements.map((e) => {
                    return  <div>
                        {e}
                    </div>
                })}
            </div>
            <div className="flex" >
                <div className=" mr-4 p-2 bg-gray-800 text-white rounded hover:text-black hover:border hover:border-black hover:bg-slate-300 font-medium transition-all ease-linear h-10 w-16 flex items-center justify-center " >
                    {<Link to={"/signup"}> SignUp </Link>} 
                </div>
                <div className=" mr-4 p-2 bg-gray-800 text-white rounded hover:text-black hover:border hover:border-black hover:bg-slate-300 font-medium transition-all ease-linear h-10 w-16 flex items-center justify-center " >
                    {<Link to={"/signin"}>SignIn</Link>}
                </div>
            </div>
        </div>
    )
}