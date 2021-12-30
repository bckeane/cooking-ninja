//steles
import { useLocation } from 'react-router-dom';
import RecipeList from '../../components/RecipeList';
import { useFetch } from '../../hooks/useFetch';
import './Search.css';

export default function Search() {
    const queryString = useLocation().search;
    const queryParams = new URLSearchParams(queryString);
    const query = queryParams.get('q');

    const url = 'http://localhost:3000/recipes?q=' + query;
    const { data, isPending, error } = useFetch(url);
    console.log(url, queryParams, query, data, isPending, error);

    return (
        <div className="Search">
            <h2 className="page-title">Recipe including "{query}"</h2>
            {isPending && <p className="loading">Loading...</p>}
            {error && <p className="error">Error: {error}</p>}
            {data && <RecipeList
                        recipes={data}
                        />
            }
        </div>
    );
}


