import { Link } from 'react-router-dom';


function Header() {
  return (
    <header className="header">
      <h1 className="logo">Meu PetOnline</h1>
      <nav>
        <Link to="/page">home</Link>
        <Link to="/">contato</Link>
      </nav>
    </header>
  );
}

export default Header;
