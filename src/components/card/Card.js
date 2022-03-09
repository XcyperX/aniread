import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';

export default function RecipeReviewCard() {
    return (
        <Card sx={{maxWidth: 345}}>
            <CardHeader
                titleTypographyProps={{
                    fontSize: 14,
                    noWrap: true
                }}
                subheaderTypographyProps={{
                    fontSize: 12
                }}
                title="Shrimp and Chorizo Paella"
                subheader="September 14, 2016"
            />
            <CardMedia
                component="img"
                height="200"
                image="https://avatars.mds.yandex.net/get-kinopoisk-image/1600647/4b2da18f-2847-4236-8b09-367976a3cd7e/300x450"
                alt="Paella dish"
            />
            <CardContent sx={{ padding: "0.5em 1em 0.5em 1em" }}>
                <Typography variant="body2" color="text.secondary" noWrap={true}>
                    This impressive paella is a perfect party dish and a fun meal to cook
                    together with your guests. Add 1 cup of frozen peas along with the mussels,
                    if you like.
                </Typography>
            </CardContent>
            <CardActions disableSpacing sx={{ padding: "0em 0.5em 0em 0.5em" }}>
                <IconButton aria-label="add to favorites">
                    <FavoriteIcon/>
                </IconButton>
                <IconButton aria-label="share">
                    <ShareIcon/>
                </IconButton>
            </CardActions>
        </Card>
    );
}
