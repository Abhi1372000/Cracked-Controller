import { useState } from "react";
import apiClient from "../../api/apiClient";

interface FetchedGeners{
    id: number;
    name: string;
}

interface FetchedGenerResponse{
    count: number;
    next: string;
    previous: string;
    results: FetchedGeners[];
}

const endpoint = '/genres'


const GenerList:React.FC = () => {

    const [generList, setGenerList] = useState<FetchedGeners[]>([])
    const [error, setError] = useState("");
    apiClient
    .get<FetchedGenerResponse>(endpoint)
    .then((res) => {
        setGenerList (res.data.results)
        console.log(generList)
    })
    .catch((err) => {
        setError(err.message)
        console.log(error)
    });
  
    return (
    <div>
        <p>GenerList</p>
        <ul>
            {error ? <p>{error}</p> : generList.map((geners)=> <li key = {geners.id}>{geners.name}</li>)}
        </ul>
    </div>
  )
}

export default GenerList