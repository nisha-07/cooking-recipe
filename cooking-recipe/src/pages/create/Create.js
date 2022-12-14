import "./Create.css";

import { useEffect, useState } from "react";

import { useFetch } from "../../hooks/useFetch";
import { useHistory } from "react-router-dom";

const Create = () => {
    const [title, setTitle] = useState("");
    const [newIngredient, setNewIngredient] = useState("");
    const [ingredients, setIngredients] = useState([]);
    const [method, setMethod] = useState("");
    const [cookingTime, setCookingTime] = useState("");
    const history = useHistory();

    const { postData, data } = useFetch("http://localhost:3000/recipes", "POST");

    const handleAdd = (e) => {
        e.preventDefault();
        const ing = newIngredient.trim();

        if (ing && !ingredients.includes(ing)) {
            setIngredients(prevIngredients => [...prevIngredients, ing])
        }
        setNewIngredient("")
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        postData({ title, ingredients, method, cookingTime: cookingTime + ' minutes' })
    }

    // redirect the user when we get the data response
    useEffect(() => {
        if (data)
            // history.push("/");
            // here history.push is not working properly (reason can be the version of react-router-dom)
            console.log(history)
    }, [data, history]);

    return (
        <div className="create">
            <h4 className="page-title">Add a new recipe</h4>
            <form onSubmit={handleSubmit}>
                <label>
                    <span>
                        Recipe title:
                    </span>
                    <input type="text" onChange={(e) => setTitle(e.target.value)}
                        value={title} required />
                </label>
                <label>
                    <span>
                        Recipe ingredients :
                    </span>
                    <div className="ingredients d-flex flex-direction-row">
                        <input className="col-8" type="text" onChange={(e) => setNewIngredient(e.target.value)} value={newIngredient} />
                        <button className="btn col-4" onClick={handleAdd}>Add</button>
                    </div>
                    <p>Added ingredients: {ingredients.map(ing => <em>{ing},</em>)}</p>
                </label>
                <label>
                    <span>
                        Recipe method:
                    </span>
                    <textarea onChange={(e) => setMethod(e.target.value)}
                        value={method} required />
                </label>
                <label>
                    <span>
                        Recipe cooking time (minutes):
                    </span>
                    <input type="number" onChange={(e) => setCookingTime(e.target.value)}
                        value={cookingTime} required />
                </label>
                <button>Add</button>
            </form>

        </div>
    )
}

export default Create