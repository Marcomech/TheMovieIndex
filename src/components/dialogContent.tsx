import React from 'react';

import GlobalLayout from "@/layouts";
import { Box, Card, CardActions, CardContent, CardMedia, Rating, Typography } from '@mui/material';

import DownloadOptions from './downloadOptions';

export interface detailProps {
    data: Movie;
}

export default function Detail(props: detailProps) {
    const { data } = props;

    return (
        <GlobalLayout>
            < Box padding={2}
                sx={{
                    flexGrow: 1,
                    backgroundColor: 'primary.dark'
                }}>
                <Card sx={{ backgroundColor: 'primary.dark' }}>
                    <Typography
                        variant="h4"
                        overflow={'hidden'}
                        align='center'>
                        {data.title}
                    </Typography>
                    <CardMedia
                        component="img"
                        height={350}
                        image={
                            data.backdrop_path == null ?
                                'https://image.tmdb.org/t/p/w780/' + data.poster_path
                                : 'https://image.tmdb.org/t/p/w780/' + data.backdrop_path
                        } />
                    <CardContent>
                        <Rating name="customized-10"
                            defaultValue={parseFloat(data.vote_average)}
                            max={10}
                            size="small"
                            readOnly
                            precision={0.5}
                            color='#ff3d47'
                        />
                        <br />
                        <Typography
                            variant="caption"
                            overflow={'hidden'}
                            align='justify'>
                            {data.overview}
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <DownloadOptions movieId={data.id} />
                    </CardActions>
                </Card>
            </Box>
        </GlobalLayout >
    )
}






