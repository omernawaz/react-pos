import {useState } from "react"

const useGetData = () => {
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);


    const handleFetchData = async (url) => {
        setIsLoading(true);
        setError(null);

        try {
            const response = await fetch(url);
            const recievedData = await response.json();
            setData(recievedData);
        } catch (error) {
            setError({name:error.name, message: error.message});
        } finally {
            setIsLoading(false);
        }
    };


    return [data,isLoading,error,handleFetchData];
}

export default useGetData;
