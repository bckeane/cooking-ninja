import {Link} from 'react-router-dom';
import './RecipeList.css';

/*
 data.map(recipe => (
                <h2 key={recipe.id}>{recipe.title}</h2>
            ))
*/

export default function RecipeList({recipes}) {
    return (
        <div className='recipe-list'>
            {recipes.map(recipe => (
                <div key={recipe.id} className='card'>
                    <h3>{recipe.title}</h3>
                    <p>{recipe.cookingTime} to make.</p>
                    <div>{recipe.method.substring(0,100)}... </div>
                    <Link to={`/recipe/${recipe.id}`}>Cook This</Link>
                </div>
            ))}
        </div>
    )
}
