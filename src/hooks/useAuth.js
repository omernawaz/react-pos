import { useEffect, useState,useCallback } from "react"

const useAuth = () => {
    const [data,setData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    const url = "https://fakestoreapi.com/auth/login";

    const handleAuth = useCallback(async (formData) => {

        let headers = new Headers();
        headers.set("Content-Type", "application/json");
        // setIsLoading(true);
        // setError(null);

       try {
        const response = await fetch(url, {
            method: "POST",
            headers: headers,
            body: JSON.stringify({
              username: formData.get("username"),
              password: formData.get("password"),
            }),
          });
        const recievedData = await response.json();
        setData(recievedData);
       } catch(error) {
            setError(error);
       } finally {
        setIsLoading(false);
       }
    }, [])

    useEffect(()=>{
        handleAuth();
    },[handleAuth]);


    return [data,isLoading,error, handleAuth];

}

export default useAuth;