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

        projectFirebasestore.collection("recipes").get().then((snapshot) => {
            console.log(snapshot.docs);
            if (snapshot.empty)
                setError("No data found")
            setIsLoading(false);
            let results = [];
            snapshot.forEach((doc) => {
                results.push({ id: doc.id, ...doc.data() })
            })
            setData(results);
            setIsLoading(false);
        }).catch(err => { setError(err); })
        console.log(data, "DATA")
    }, [])

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
