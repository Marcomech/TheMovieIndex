import React, { useState, useEffect } from 'react';
import { getMovies } from '@/services/getData';
import Grid from '@mui/material/Unstable_Grid2';
import { CircularProgress } from '@mui/material';
import MovieCard from '@/components/movieCard';

export interface movieGridProps {
    query: string;
    openDialog: () => void;
    addData: (movieData: Movie) => void;
}

export default function MovieGrid(props: movieGridProps) {
    const { query, openDialog, addData } = props;
    const [loading, setLoading] = useState(false);
    const [movies, setMovies] = useState<Movie[]>([]);

    useEffect(function () {
        setLoading(true)
        const cleanQuery: string = query.replaceAll(" ", "+")
        getMovies({ query: cleanQuery })
            .then(movies => {
                setMovies(movies)
                setLoading(false)
            })
    }, [query])

    if (loading) {
        return (
            <CircularProgress />
        )
    } else {
        return (
            <>
                <Grid container spacing={2} >
                    {Array.from(Array(movies.length)).map((_, index) => (
                        <Grid xs={4} sm={3} md={2} key={index}>
                            <MovieCard
                                data={movies[index]}
                                openDialog={openDialog}
                                addData={addData}
                            />
                        </Grid>
                    ))}
                </Grid>
            </>
        )
    }
}
