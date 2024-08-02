import { useCallback, useState } from "react"

const usePutData =() =>{
    const [data, setData] = useState();
    const [isLoading,setIsLoading] = useState();
    const [error, setError] = useState();

    const handlePutData = useCallback(async (url, data, update=false) => {
        let headers = new Headers();
        headers.set("Content-Type", "application/json");
        let method = "POST";
        if(update === true) {
            method = "PUT";
        }
        setIsLoading(true);
        setError(null);
        
        try {
            const response = await fetch(url,{
                method:method,
                headers:headers,
                body:JSON.stringify(data),
            });

            const recievedResponse = await response.json();
            setData(recievedResponse);

        } catch (error) {
            setError({name: error.name, message:error.message});
        } finally {
            setIsLoading(false);
        }
    },[]);

    return [data,isLoading,error,handlePutData];
}

export default usePutData;