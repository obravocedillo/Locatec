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
    const classes=useStyles();
    console.log(props.name)
    return (
        <Card>
            <Grid container className="DescriptionContainer">
                <Grid item xl={6}>
                <CardMedia
                    className={classes.media}
                    image={require("../Assets/stories.jpg")}
                    title="Contemplative Reptile"
                />
                </Grid>
                    <Grid container className="DescriptionContainer">
                        <Grid container className="DescriptionContainer">
                        <Grid container className="DescriptionContainer">
                            <Grid container className="DescriptionContainer">
                                <Grid item sm={10}>
                                    <br/>
                                    <br/>
                                    <Typography align="center" variant="h3" className="DetailPart PurpleColor">
                                    {props.name.data.name}
                                    </Typography>
                                    <br/>
                                    <Divider>
                                    </Divider>
                                    <br/>
                                    <Typography paragraph={true} className="DetailPart PurpleColor">
                                    Encontrado por:<span className="NormalColor"> {props.name.data.encontrado_por} </span> 
                                    </Typography>
                                    <br/>
                                    <Divider>
                                    </Divider>
                                    <br/> 
                                    
                                    <Typography className="DetailPart PurpleColor">Lugar:<span className="NormalColor"> {props.name.place.name}</span> </Typography>
                                    <Typography className="DetailPart PurpleColor">Fecha:<span className="NormalColor"> {props.name.data.datafecha_perdida}</span> </Typography>
                                    <br/>
                                    <Button variant="outlined" color="primary" size="large" className="DetailButton">Reclamar</Button>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Card>
    );
}