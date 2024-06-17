function Quote() {
  return (
    <div className=" bg-slate-200 h-screen flex justify-center flex-col  "  >
        <div className=" flex justify-center bg-blue-600" >
            <div className=" max-w-md text-center text-2xl font-bold" >
                <div>
                "The customer service I received was exceptional. The support team went above and beyond to address my concerns."
                </div>
            </div>

        </div>
        <div className="max-w-md text-xl font-semibold bg-red-500 self-center" >
                Julies Winfield
            </div>
            <div className="max-w-md text-m font-semibold text-gray-500 self-center" >
                CEO | Acme corp
            </div>
    </div>
  )
}
export default Quote