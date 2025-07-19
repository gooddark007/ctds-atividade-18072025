import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Header from "./Componets/Header/Header"
import Home from "./pages/home/page"
import Footer from "./Componets/Footer/Footer"
import Contato from "./pages/contato/page"
function App() {


  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/contato" element={<Contato/>}/>


          {/* Outras rotas aqui */}
     
        </Routes>
      </Router>
      <Footer/>
    </>
  )
}

export default App
