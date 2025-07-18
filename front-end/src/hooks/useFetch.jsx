import { useState, useEffect } from "react";

export default function useFetch(url, options = {}) {
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);
    const [result, setResult] = useState(null);

    useEffect(() => {
        if (!url) return;

        const fetchData = async () => {
            setIsLoading(true);
            setIsError(false);
            setResult(null);

            try {
                const response = await fetch(url, options);
                const data = await response.json().catch(() => ({}));

                if (!response.ok) {
                    throw new Error(data.message || "Erreur lors du chargement des données.");
                }

                setResult(data);
            } catch (error) {
                setIsError(true);
                setResult({ error: error.message });
            } finally {
                setIsLoading(false);
            }
        };

        fetchData();
    }, [url, JSON.stringify(options)]); // dépendances étendues

    return { isLoading, isError, result };
}

