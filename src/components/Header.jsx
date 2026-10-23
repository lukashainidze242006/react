import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../context/UserContext';

function Header() {
  const user = useContext(UserContext);

  return (
    <header style={{ borderBottom: '2px solid #333', paddingBottom: '10px' }}>
      <h1>ჩემი React აპლიკაცია</h1>
      <p>ავტორი / {user.role}: <strong>{user.name}</strong></p>
      
      <nav style={{ marginTop: '10px', display: 'flex', gap: '15px' }}>
        <Link to="/">მთავარი</Link>
        <Link to="/products">პროდუქტები</Link>
        <Link to="/contact">კონტაქტი</Link>
        <Link to="/about">ჩვენ შესახებ</Link>
      </nav>
    </header>
  );
}

export default Header;