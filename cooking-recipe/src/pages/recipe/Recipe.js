import "./Recipe.css";

import { Audio } from "react-loader-spinner";
import { useFetch } from "../../hooks/useFetch";
import { useParams } from "react-router-dom";

const Recipe = () => {
    const { id } = useParams();
    const { data: recipe, isLoading, error } = useFetch(`http://localhost:3000/recipes/${id}`)

    return (
        <div>
            {isLoading && <div className="loading">
                <Audio
                    height="80"
                    color="#58249c"
                /></div>}
            {error && <div className="error">{error}</div>}
            {recipe &&
                <div className="recipe">
                    <h3 className="page-title">{recipe.title}</h3>
                    <p>Time {recipe.cookingTime} to cook.</p>
                    <ul>{recipe.ingredients.map((ing) => <li key={ing}>{ing}</li>)}</ul>
                    <p className="method">{recipe.method}</p>
                </div>}
        </div>
    )
}

export default Recipe