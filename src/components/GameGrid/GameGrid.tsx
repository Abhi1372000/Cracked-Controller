import { useEffect, useState } from "react";
import apiClient from "../../api/apiClient";

const endpoint = "/games";

interface FetchedGamesList {
  count: number;
  next: string;
  previous: string;
  results: [];
}

const GameGrid = () => {
  const [Games, setGames] = useState([]);
  const [error, setError] = useState("");

  useEffect(()=>{
    apiClient.get<FetchedGamesList>(endpoint).then((res) => {
        console.log("this is inside use effect", res.data.results)
        setGames(res.data.results)})
        .catch(err => setError(err.message))
  })

//   console.log("this is game list",Games)
//   console.log("This is error",error)
  return (
    <>
      <div>GameGrid</div>
      <ul>
        {/* {Games.map(game => <li key={game.id}></li>)} */}
      </ul>
    </>
  );
};

export default GameGrid;
