import { useEffect, useState } from "react"

const useGetData = (url) => {
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);


    useEffect(() => {
        const handleFetchData = async () => {
            setIsLoading(true);
            setError(null);

            try {
                const response = await fetch(url);
                const recievedData = await response.json();
                setData(recievedData);
            } catch (error) {
                setError(error);
            } finally {
                setIsLoading(false);
            }
        }
        handleFetchData();
    }, [url]);

    return [data,isLoading,error];
}

export default useGetData;