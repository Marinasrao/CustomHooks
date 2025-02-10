import { useState, useEffect, useCallback } from "react";

export const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    // ✅ Incluir `url` como dependencia de `fetchData`
    const fetchData = useCallback(async () => {
        if (!url) return; // Evitar ejecutar si no hay URL

        setIsLoading(true);
        console.log("Fetching data from:", url);

        try {
            const response = await fetch(url);
            const result = await response.json();
            console.log("Data received:", result);

            setData(result);
            setIsLoading(false);
        } catch (err) {
            console.error("Fetch error:", err);
            setError(err.message);
            setIsLoading(false);
        }
    }, [url]);  // ✅ Ahora `url` está en las dependencias

    // ✅ Incluir `fetchData` en las dependencias de `useEffect`
    useEffect(() => {
        fetchData();
    }, [fetchData]);  

    return { data, isLoading, error };
};




