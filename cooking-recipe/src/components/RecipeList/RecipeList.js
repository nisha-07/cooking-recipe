import './RecipeList.css';

import { Link } from "react-router-dom"

const RecipeList = ({ recipes }) => {
    return (
        <div className='recipe-list'>
            {recipes && recipes.map((recipe => (
                <div key={recipe.id} className="recipe-card">
                    <h4>{recipe.title}</h4>
                    <p>{recipe.cookingTime}</p>
                    <p>{recipe.ingredients}</p>
                    <p>{recipe.method.substring(0, 100)}...</p>
                    <Link to={`/recipes/${recipe.id}`}>Cook this</Link>
                </div>
            )))}
        </div>
    )
}

export default RecipeList
