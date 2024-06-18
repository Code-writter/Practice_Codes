import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { SignupInput } from '../Zod'
import axios from 'axios'
import { BACKEND_URL } from '../config/config'

export default function Auth({type} : {type : "SignUp" | "SignIn"}){
  const navigate = useNavigate();
  const [ postInputs, setPostInputs] = useState <SignupInput>({
    name : "",
    email : "",
    password : "",
  })
//${}
  async function sendInputs(){
    try {
      const response = await axios.post(`${BACKEND_URL}/api/v1/user/${type === "SignUp" ? "signup" : "signin"}`, postInputs);
      console.log(response)
      const jwt = response.data;
      localStorage.setItem("token", jwt);
      navigate('/blogs')
    } catch (error) {
      console.log(error)
    }
  } 
  
  return(

    <div className=" h-screen flex flex-col justify-center /" >
      <div className=" self-center max-w-md text-center text-3xl font-bold  p-2 " >
        Create an account
        
      </div>
      <div className=' self-center text-gray-600 max-w-md text-center text-sm font-semibold pb-3' >
      
        {type === "SignIn" ? "Don't have an account?" : "Already have an account?"}
        <Link to={type === "SignIn" ? "/signup": "/signin"} className='underline hover:text-black transition-all ease-linear p-2' >
          {type === "SignIn" ? "SignUp" : "SignIn"}
        </Link>
      </div>

        <div className=' w-1/2 self-center' >
        <div className=' self-center ' >
          {type ==='SignUp' ? <Inputs label='Name' placeholder='Name' onChange={(e) => {
            setPostInputs(c =>({
              ...c,
              name : e.target.value
            }))
          }} /> : null }
          <Inputs label='Email' placeholder='Email' onChange={(e) => {
            setPostInputs(c =>({
              ...c,
              email : e.target.value
            }))
          }} />
          <Inputs label='Password' type={"password"} placeholder='Password' onChange={(e) => {
            setPostInputs(c =>({
              ...c,
              password : e.target.value
            }))
          }} />
      </div>
      <button onClick={sendInputs} type="button" className= " w-full ml-2 m-4 text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2">{type === 'SignUp' ? 'SignUp' : "SignIn"}</button>
        </div>

    </div>
  )
}

interface Inputs {
  label : string,
  placeholder : string
  onChange : (e :any) => void
  type? : string
}

function Inputs({label, placeholder, onChange, type} : Inputs){
  return (
    <div>
        <div>
            <label className="block mb-1 text-sm font-semibold text-gray-900">{label}</label>
            <input onChange={onChange} 
            type={type || 'text'}  
            className="bg-gray-50 border border-gray-800 text-gray-900 text-sm rounded-lg focus:ring-blue-500  focus:border-blue-500 block w-full p-2.5  m-2" 
            placeholder={placeholder} required />
        </div>
    </div>
  )
}