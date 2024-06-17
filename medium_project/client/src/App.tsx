import { BrowserRouter, Route, Routes } from "react-router-dom"
import SignUp from "./pages/Signup"
import Signin from "./pages/Signin"
import Blog from "./pages/Blog"

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/signup" element={<SignUp />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/blog" element={<Blog />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
