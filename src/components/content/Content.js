import * as React from 'react';
import {styled} from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import LatestReleases from './LatestReleases';
import TopsWeek from './TopsWeek';
import PopularManga from './PopularManga'
import {Container, Stack} from "@mui/material";
import Typography from "@mui/material/Typography";

const Item = styled(Paper)(({theme}) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    marginBottom: 10,
}));

export default function Content() {
    return (
        <Container fixed>
            <Box sx={{flexGrow: 1, mr: 2, ml: 2, mt: 1}}>
                <Grid container spacing={2}>
                    <Grid item xs={9}>
                        <Item>
                            <Typography variant="h5" align={"left"}>
                                Последние релизы
                            </Typography>
                            <LatestReleases/>
                        </Item>
                        <Item>
                            <Typography variant="h5" align={"left"}>
                                Популярная манга
                            </Typography>
                            <PopularManga/>
                        </Item>
                    </Grid>
                    <Grid item xs={3}>
                        <Item>
                            <Typography variant="h5" align={"left"}>
                                Топы недели
                            </Typography>
                            <TopsWeek/>
                        </Item>
                    </Grid>
                </Grid>
            </Box>
        </Container>
    );
}