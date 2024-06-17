import Quote from "../components/Quote"
export default function SignUp() {
    return(
        <>
            <div className=" h-screen w-full grid lg:grid-cols-2 grid-cols-1 " >
                <div className="" >
                    <Auth />
                </div>
                <div className=" invisible lg:visible" >
                    <Quote />
                </div>
            </div>
        </>
    )
}