import {Link} from 'react-router-dom';
import './RecipeList.css';
import {useTheme} from '../hooks/useTheme';

/*
 data.map(recipe => (
                <h2 key={recipe.id}>{recipe.title}</h2>
            ))
*/

export default function RecipeList({recipes}) {
    const {mode} = useTheme(); 

    if (recipes.length === 0) {
        return (
            <div className="error">
                <p>No recipes found</p>
            </div>
        );
    }
    
    return (
        <div className='recipe-list'>
            {recipes.map(recipe => (
                <div key={recipe.id} className={`card ${mode}`}>
                    <h3>{recipe.title}</h3>
                    <p>{recipe.cookingTime} to make.</p>
                    <div>{recipe.method.substring(0,100)}... </div>
                    <Link to={`/recipe/${recipe.id}`}>Cook This</Link>
                </div>
            ))}
        </div>
    )
}
