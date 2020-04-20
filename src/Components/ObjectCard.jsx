  
import React from 'react';
import {Link} from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    maxWidth: 300,
  },
  media: {
    height: 140,
  },
});

export default function ObjectCard(props) {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={props.data.img_url}
          title={props.data.name}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {props.data.name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Fecha perdido: {props.data.fecha_perdida}
            <br/> 
            Lugar perdido: {props.place.name}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Link to={{
                  pathname: "/Details",
                  state: {
                    data: props.data,
                    place: props.place
                  }
              }}>
          <Button size="small" color="primary">
            Ver más
          </Button>
        </Link>
      </CardActions>
    </Card>
  );
}