import * as React from 'react';
import { Card, CardMedia } from '@mui/material';

export interface movieCardProps {
    data: Movie,
    openDialog: () => void;
    addData: (movieData: Movie) => void;
}


export default function MovieCard(props: movieCardProps) {
    const { data, openDialog, addData } = props;

    const handleClick = (movieData: Movie) => {
        addData(movieData);
        openDialog();
    }

    return (
        <>
            <Card onClick={() => handleClick(data)}>
                <CardMedia
                    key={data.id}
                    component="img"
                    image={'https://image.tmdb.org/t/p/w500/' + data.poster_path}
                />
            </Card>
        </>
    );
}


