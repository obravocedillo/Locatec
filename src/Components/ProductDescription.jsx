import React from 'react';
import '../Style/Home.css';
import { Typography, Grid, Button, Divider, Card, CardMedia } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    root: {
      maxWidth: 300,
    },
    media: {
      minHeight: '70vh',
    }
  });

export default function ProductDescription(props) {
    console.log(props)
    const classes=useStyles();
    return (
        <Card>
            <Grid container >
                <Grid item xl={6}>
                <CardMedia
                    className={classes.media}
                    image={require("../Assets/stories.jpg")}
                    title="Contemplative Reptile"
                />
                </Grid>
                    <Grid container xl={6}>
                        <Grid container xl={12}>
                        <Grid item xl={1}>
                        </Grid>
                        <Grid container xl={10}>
                            <Grid container xl={12}>
                                <Grid item xl={1}>
                                </Grid>
                                <Grid item xl={10}>
                                    <br/>
                                    <br/>
                                    <Typography align="center" variant="h3">
                                    {props.data.name}
                                    </Typography>
                                    <br/>
                                    <Divider>
                                    </Divider>
                                    <br/>
                                    <Typography paragraph={true}>
                                    Encontrado por: {props.data.encontrado_por}  
                                    </Typography>
                                    <br/>
                                    <Divider>
                                    </Divider>
                                    <br/> 
                                    
                                    <Typography>Lugar: {props.place.name}</Typography>
                                    <Typography>Fecha: {props.data.fecha_perdida} </Typography>
                                    <br/>
                                    <Button variant="outlined" color="primary" size="large">Reclamar</Button>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Card>
    );
}