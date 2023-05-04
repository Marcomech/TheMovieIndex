import { downloadMovie } from "@/services/getData";
import { Grid, Card, CardHeader, CardContent, Typography, CardActions, Button } from "@mui/material";
import { useState } from "react";

export interface downloadOptionsProps {
    movieId: string;
}

export default function DownloadOptions(props: downloadOptionsProps) {
    const { movieId } = props;
    const [isDetailed, setDetailed] = useState(false);
    const [isLoading, setLoading] = useState(false);
    const [torrentTiers, setTorrentTiers] = useState<Tier[]>([]);

    const handleClick = () => {
        setLoading(true);
        setDetailed(true);
        downloadMovie({ code: movieId })
            .then(movies => {
                setTorrentTiers(movies)
                setLoading(false);
            })
    }
    function OpenInNewTabWinBrowser(url: string) {
        var win = window.open(url, '_blank');
        win!.focus();
    }
    if (isDetailed && !isLoading) {
        if (torrentTiers.length === 0) {
            return <Typography>
                No hay opciones de descarga
            </Typography>
        } else {
            return <Grid container spacing={2}>
                {torrentTiers.map((tier: Tier, index) => (
                    <Grid item xs={12} sm={4} key={index}>
                        <Card sx={{ background: '#207398' }} >
                            <CardHeader
                                title={tier.quality}
                            />
                            <CardContent sx={{ mt: -3 }}>
                                <Typography>
                                    {(tier.type).toUpperCase()}
                                </Typography>
                                <Typography>
                                    {tier.size}
                                </Typography>
                            </CardContent>
                            <CardActions disableSpacing>
                                <Button
                                    fullWidth
                                    variant='contained'
                                    sx={{ background: '#12B0E8' }}
                                    onClick={() => OpenInNewTabWinBrowser(
                                        "magnet:?xt=urn:btih:" + tier.hash + "&dn=" + movieId + tier.quality)}>
                                    Descargar
                                </Button>
                            </CardActions>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        }
    } else {
        return <Button
            variant='contained'
            onClick={() => handleClick()}>
            Descargar
        </Button>
    }
}
