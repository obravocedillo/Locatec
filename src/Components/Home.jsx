import React, {Component} from 'react';
import { LocatecContext } from '../Context/LocatecContext';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import PlaceIcon from '@material-ui/icons/Place';
import PersonIcon from '@material-ui/icons/Person';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import '../Style/Home.css'
import Grid from '@material-ui/core/Grid';
import NavBar from './NavBar'


class Home extends Component{
  //Consumir Context el cual se pasó en Appp.js.
  static contextType = LocatecContext;

  constructor(props){
    super(props);
    this.state = {
      
    };
  }

  componentDidMount() {
    //Usar Contexto definido, en este caso static contextType = LocatecContext;
    const LocatecContext = this.context
    console.log(LocatecContext.Locatec);
  }

  render() {
    return (
      <div>
        <Grid container className="MainFullGrid">
          <NavBar active="Home"></NavBar>
          <Grid container className="MainSearchContainer">
            <Grid item xs={10} md={8} className="MainTitle">
              <h2>Si perdiste o no encuentras algo nosotros te ayudamos</h2>
            </Grid>
            <Grid item xs={10} md={8}>
              <Paper className="SearchContainerBase" elevation={3}>
                <InputBase
                  className="SearchContainerInputBase"
                  placeholder="¿Qué estas buscando?"
                />
                <IconButton type="submit" aria-label="search" className="IconSearchButton">
                  <SearchIcon />
                </IconButton>
              </Paper>
            </Grid>
          </Grid>

          <Grid container className="ListContainerMain">
            <Grid item xs={9} md={8} className="ListContainer">
              <List>
                <ListItem>
                  <ListItemAvatar>
                    <Avatar>
                      <HelpOutlineIcon/>
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText primary="Somos una plataforma la cual ayuda a registrar y encontrar objetos perdidos" secondary="recuperación de objetos perdidos" className="ListText"/>
                </ListItem>
                <ListItem>
                  <ListItemAvatar>
                    <Avatar>
                      <PlaceIcon/>
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText primary="Podras buscar por fecha, lugar donde se perdió y características del objeto" secondary="busqueda personalizada" className="ListText"/>
                </ListItem>
                <ListItem>
                  <ListItemAvatar>
                    <Avatar>
                      <PersonIcon/>
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText primary="Reclama tu objeto perdido con tu nombre y matricula" secondary="control en la reclamación del objeto" className="ListText" />
                </ListItem>
              </List>
            </Grid>
          </Grid>
        </Grid>
        <svg className="Wave" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#3f51b5 " fill-opacity="1" d="M0,128L60,138.7C120,149,240,171,360,186.7C480,203,600,213,720,208C840,203,960,181,1080,192C1200,203,1320,245,1380,266.7L1440,288L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path></svg>
      </div>
    )
  }
}

export default Home;
