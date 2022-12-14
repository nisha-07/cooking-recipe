import "./Home.css";

import { Audio } from 'react-loader-spinner'
import RecipeList from "../../components/RecipeList/RecipeList";
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
            {recipes && <RecipeList recipes={recipes} />}
        </div>
    )
}

export default Home
