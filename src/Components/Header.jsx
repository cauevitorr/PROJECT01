import { Link } from "react-router-dom"
import '../Styles/style.css'

const Header = () => {
 return (
  <header>
   <div><h1>AstroWeb</h1></div>
   <nav>
    <Link to='/'><h1>Home</h1></Link>
    <span>|</span>
    <Link to='sobre'><h1>Sobre</h1></Link>
    <span>|</span>
    <Link to='contato'><h1>Contato</h1></Link>
   </nav>
  </header>
 )
}
export default Header
