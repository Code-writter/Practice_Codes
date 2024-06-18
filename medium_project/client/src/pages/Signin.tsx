import Quote from "../components/Quote"
import Auth from "../components/Auth"
export default function SignIn() {
    return(
        <>
            <div className=" h-screen w-full grid lg:grid-cols-2 grid-cols-1 " >
                <div className="" >
                    <Auth type="SignIn"  />
                </div>
                <div className=" hidden lg:block" >
                    <Quote />
                </div>
            </div>
        </>
    )
}