import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import * as React from "react";
import Card from "../card/Card"

export default function LeftContent() {
    return(
        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <Card />
                </Grid>
                <Grid item xs={12}>
                    <Card />
                </Grid>
                <Grid item xs={12}>
                    <Card />
                </Grid>
                <Grid item xs={12}>
                    <Card />
                </Grid>
            </Grid>
        </Box>
    );
}