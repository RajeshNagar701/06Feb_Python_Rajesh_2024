import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import About from './Pages/About'
import Blog from './Pages/Blog'
import Contact from './Pages/Contact'
import PNF from './Pages/PNF'

function App_Routing() {
  return (
    
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<> <Home/> </>}></Route>
            <Route path="/about" element={<> <About/> </>}></Route>
            <Route path="/blog" element={<> <Blog/> </>}></Route>
            <Route path="/contact" element={<> <Contact/> </>}></Route>
            <Route path="*" element={<> <PNF/> </>}></Route>
        </Routes>
    </BrowserRouter>
        
    
  )
}

export default App_Routing