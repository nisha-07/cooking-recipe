import "./Search.css";

import { Audio } from "react-loader-spinner";
import RecipeList from "../../components/RecipeList/RecipeList";
import { useFetch } from "./../../hooks/useFetch"
import { useLocation } from "react-router-dom";

const Search = () => {
    const queryString = useLocation().search;
    const queryParams = new URLSearchParams(queryString);
    const query = queryParams.get("q");

    const url = "http://localhost:3000/recipes?q=" + query

    const { data, error, isLoading } = useFetch(url);
    console.log(data)

    return (
        <div className="page-title">
            <h4>Recipe including "{query}"</h4>
            {isLoading && <div className="loading">
                <Audio
                    height="80"
                    color="#58249c"
                /></div>}
            {error && <div className="error">{error}</div>}
            {data && <RecipeList recipes={data} />}
        </div>
    )
}

export default Search