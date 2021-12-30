import { useFetch } from '../../hooks/useFetch';

//steles
import './Home.css';

//components
import RecipeList from '../../components/RecipeList';


export default function Home() {
    const { data, isPending, error } = useFetch('http://localhost:3000/recipes');
    return (
        <div className="home">
            {isPending && <p className="loading">Loading...</p>}
            {error && <p className="error">Error: {error}</p>}
            {data && <RecipeList recipes={data} />}
        </div>
    );
}


