import { Link } from 'react-router-dom';
import Logo from "../../assets/images/fav_icon.png";

function NavBar() {
  return (
    <div className="header">
      <div className="container">
        <Link to="/"><img className="logo" src={Logo} alt="Logo Alien" /></Link>
        <div className="links">
          <span className="icon">
            <span></span>
            <span></span>
            <span></span>
          </span>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/sobre_nos">Sobre Nos</Link></li>
            <li><Link to="/projeto">Projeto</Link></li>
            <li><Link to="/demo">Demo</Link></li>
            <li><Link to="/como_vai_ser">Como vai ser?</Link></li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
