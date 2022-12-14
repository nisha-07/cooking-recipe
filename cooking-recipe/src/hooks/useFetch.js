import { useState, useEffect } from "react"

export const useFetch = (url, method = "GET") => {
    const [data, setData] = useState(null)
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState(null)
    const [options, setOptions] = useState(null)

    const postData = (postData) => {
        setOptions({
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(postData)
        })
    }
    useEffect(() => {
        const controller = new AbortController()

        const fetchData = async (fetchOptions) => {
            setIsLoading(true)

            try {
                const res = await fetch(url, { ...fetchOptions, signal: controller.signal })
                if (!res.ok) {
                    throw new Error(res.statusText)
                }
                const data = await res.json()

                setIsLoading(false)
                setData(data)
                setError(null)
            } catch (err) {
                if (err.name === "AbortError") {
                    console.log("the fetch was aborted")
                } else {
                    setIsLoading(false)
                    setError('Could not fetch the data')
                }
            }
        }

        fetchData()

        // invoke the function
        if (method === "GET") {
            fetchData()
        }
        if (method === "POST" && options) {
            fetchData(options)
        }

        return () => {
            controller.abort()
        }

    }, [url, method, options])

    return { data, isLoading, error, postData }
}