import { Link } from 'react-router-dom';
import SearchBar from './SearchBar';
import { useTheme } from '../hooks/useTheme';

// styles
import './NavBar.css'


export default function Navbar() {
  const { color } = useTheme();
  return (
    <div className="navbar" style= {{backgroundColor: color}}>
      <nav>
        <Link to="/" className="brand">
          <h1>Cooking Ninja</h1>
        </Link>
        <SearchBar />
        <Link to="/create">Create Recipe</Link>
      </nav>
    </div>
  )
}