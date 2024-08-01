import { useState,useCallback } from "react"

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
            if(error.name === 'SyntaxError'){
                setError({name: 'Authorization Error', message: "Invalid Username or Password"});
            } else if (error.name === "TypeError") {
                setError({name: 'Server Error', message: "Could not connect to server"});
            }
       } finally {
        setIsLoading(false);
       }
    }, [])


    return [data,isLoading,error, handleAuth];

}

export default useAuth;