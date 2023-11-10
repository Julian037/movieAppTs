import React, { useEffect, useState } from 'react'
import { MovieFull } from '../interfaces/movieInterface';
import movieDB from '../api/movideDB';

interface MovieDetails {

  isLoading: boolean;
  movieFull: MovieFull;
  cast: any[];
}

const useMovieDetails = (movieId: number) => {
  const [state, setState] = useState<MovieDetails>()

  const getMovieDetails =async () => {
    const resp = await movieDB.get<MovieFull>(`/${movieId}`)
    console.log(resp.data.overview)
  }

  useEffect(() => {
    getMovieDetails()
  }, [])
  

  return (
    {state}
  )
}

export default useMovieDetails