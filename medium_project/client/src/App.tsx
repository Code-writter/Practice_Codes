import { BrowserRouter, Route, Routes } from "react-router-dom"
import SignUp from "./pages/Signup"
import Signin from "./pages/Signin"
import Blog from "./pages/Blog"
import Home from "./pages/Home"

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/blog" element={<Blog />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
