import "./Home.css";

import { Audio } from 'react-loader-spinner'
import { useFetch } from "../../hooks/useFetch";

const Home = () => {
    const { data: recipes, isLoading, error } = useFetch("http://localhost:3000/recipes");

    return (
        <div className="home">
            {isLoading && <div className="loading"><Audio
                height="80"
                color="#58249c"
            /></div>}
            {error && <div className="error">{error}</div>}
            {recipes && recipes.map((recipe => (
                <div key={recipe.id}>
                    <h4>{recipe.title}</h4>
                </div>
            )))}
        </div>
    )
}

export default Home
