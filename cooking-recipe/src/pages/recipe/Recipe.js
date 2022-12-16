import "./Recipe.css";

import { Audio } from "react-loader-spinner";

import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { projectFirebasestore } from "../../firebase/config";

const Recipe = () => {
    const { id } = useParams()

    const [recipe, setRecipe] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        setIsLoading(true)

        projectFirebasestore.collection("recipes").doc(id).get().then((doc) => {
            if (doc.exists) {
                setIsLoading(false)
                setRecipe(doc.data())
            }
            else {
                setIsLoading(false)
                setError("Could not find the recipe")
            }
        })

    }, [])

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