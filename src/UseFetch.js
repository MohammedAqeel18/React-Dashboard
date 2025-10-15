import { useState,useEffect } from "react";

function UseFetch(url){ 
const[user,setUser]= useState(null);
const [loading,setLoading]= useState(true);
const [error,setError] = useState(null );

useEffect(()=> {
    async function getData(){
        try{
            const response= await fetch (url);
            if (!response.ok) throw new error ("not found")
        const result = await response.json();
    setUser(result);
            }catch (err){
                setError(err.message)
            }finally{
                setLoading(false)
            }
    } 
    getData();
},[url]);

    return {user,loading,error}
     
}
export default UseFetch;