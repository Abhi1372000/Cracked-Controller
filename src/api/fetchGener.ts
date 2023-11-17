import apiClient from "./apiClient";

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



export function fetchGeners() {
    let genres;
  apiClient
    .get<FetchedGenerResponse>(endpoint)
    .then((res) => {
        genres = res.data.results
    })
    .catch((err) => {genres = err.message});
    return genres

}
