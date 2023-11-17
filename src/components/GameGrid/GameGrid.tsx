import { useEffect, useState } from "react";
import apiClient from "../../api/apiClient";

const endpoint = "/games";

interface FetchedGames {
  id: number;
  name: string;
}

interface FetchedGamesResponse {
  count: number;
  next: string;
  previous: string;
  results: FetchedGames[];
}

const GameGrid = () => {
  const [Games, setGames] = useState<FetchedGames[]>([]);
  const [error, setError] = useState("");

  useEffect(()=>{
    apiClient.get<FetchedGamesResponse>(endpoint).then((res) => {
      console.log(res)
        setGames(res.data.results)})
        .catch(err => setError(err.message))
  },[])

  return (
    <>
      <ul>
        {error ? <p>{error}</p> : null }
        {Games.map(game => <li key={game.id}>{game.name}</li>)}
      </ul>
    </>
  );
};

export default GameGrid;
