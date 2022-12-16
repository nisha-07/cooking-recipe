import "./Home.css";

import { useEffect, useState } from "react";

import { Audio } from 'react-loader-spinner'
import RecipeList from "../../components/RecipeList/RecipeList";
import { projectFirebasestore } from "../../firebase/config";

const Home = () => {

    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        setIsLoading(true)

        // projectFirebasestore.collection("recipes").get().then((snapshot)
        // this will not update the collections for UI (if some recipes are deleted)

        const unsub = projectFirebasestore.collection("recipes").onSnapshot((snapshot) => {
            if (snapshot.empty)
                setError("No recipes found for project")
            setIsLoading(false);
            let results = [];
            snapshot.forEach((doc) => {
                results.push({ id: doc.id, ...doc.data() })
            })
            setData(results);
            setIsLoading(false);
        }, (err) => setError(err.message))

        return () => unsub()
    },
        [])

    return (
        <div className="home">
            {isLoading && <div className="loading"><Audio
                height="80"
                color="#58249c"
            /></div>}
            {error && <div className="error">{error}</div>}
            {data && <RecipeList recipes={data} />}
        </div>
    )
}

export default Home
