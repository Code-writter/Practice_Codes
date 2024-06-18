import Quote from "../components/Quote"
import Auth from "../components/Auth"
export default function SignUp() {
    return(
        <>
            <div className=" h-screen w-full grid lg:grid-cols-2 grid-cols-1 " >
                <div className="" >
                    <Auth type="SignUp"  />
                </div>
                <div className=" none lg:block" >
                    <Quote />
                </div>
            </div>
        </>
    )
}