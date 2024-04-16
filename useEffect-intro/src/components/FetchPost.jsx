import { useState, useEffect } from "react";

export default function FetchPost() {
    
    const [dataApi, setDataApi] = useState([]);
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        setTimeout(() => {
            fetch("https://jsonplaceholder.typicode.com/posts/1")

                .then((response) => response.json())
                .then((data) => setDataApi(data));
            setLoading(false)
        }, 1000);
       
    }, []);

    if(!dataApi) return <div>Laddar...</div>
   

    return (
      
        <div className="fetch-data">
            {loading ? (<p>Laddar data... </p>) : (
        <>
            <h3>{dataApi.title}</h3>
            <p>{dataApi.body}</p> 
        </>
        )}
        </div>            
    );
}

