import './RecipeList.css';

import { Link } from "react-router-dom"
import TrashIcon from "../../assets/delete-icon.svg"
import { projectFirebasestore } from '../../firebase/config';
import useTheme from '../../hooks/useTheme';

const RecipeList = ({ recipes }) => {
    const { mode } = useTheme()

    const handleClick = (id) => {
        projectFirebasestore.collection("recipes").doc(id).delete();
    }

    return (
        <div className='recipe-list'>
            {recipes && recipes.map((recipe => (
                <div key={recipe.id} className={`recipe-card ${mode}`}>
                    <h4>{recipe.title}</h4>
                    <p>{recipe.cookingTime}</p>
                    <p>{recipe.ingredients}</p>
                    <p>{recipe.method.substring(0, 100)}...</p>
                    <Link to={`/recipes/${recipe.id}`}>Cook this</Link>
                    <img src={TrashIcon} alt="delete-recipe-icon" className='delete' onClick={() => handleClick(recipe.id)} />
                </div>
            )))}
        </div>
    )
}

export default RecipeList
