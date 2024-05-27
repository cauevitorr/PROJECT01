import { BrowserRouter, Routes, Route} from "react-router-dom"
import Home from "./Home.jsx"
import Sobre from "./Sobre.jsx"
import Contato from "./Contato.jsx"
import Header from "./Header.jsx"
import Rodape from "./Rodape.jsx"
import '../Styles/style.css'
const App = () => {
 return(
  <BrowserRouter>
  <Header/>
  <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/sobre" element={<Sobre />} />
      <Route path="/contato" element={<Contato />} />
  </Routes>
  <Rodape/>
</BrowserRouter>
 )
}

export default App
