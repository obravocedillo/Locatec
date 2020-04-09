import React, {Component} from 'react';
import '../Style/NavBar.css'
import AppBar from '@material-ui/core/AppBar';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import HomeIcon from '@material-ui/icons/Home';
import ListIcon from '@material-ui/icons/List';
import CreateIcon from '@material-ui/icons/Create';
import { Hidden, Typography } from '@material-ui/core';


class NavBar extends Component{ 
  constructor(props){
    super(props);
    this.state = {
        drawerIsOpen: false
    };
  }

  openMobile = () => {
    this.setState({ drawerIsOpen: true });
  };

  onClose= ()=>{
    this.setState({ drawerIsOpen: false });
  }

  onOpen = ()=>{
    this.setState({ drawerIsOpen: true });
  } 

  componentDidMount() {
  }

  render() {
    return (
        <div className="NavBarContainer">
            <AppBar position="static">
                <Toolbar className="ToolbarComplete">
                    <Hidden mdUp>
                        <IconButton edge="start" color="inherit" aria-label="menu" className="MobileIcon" onClick={this.openMobile}>
                            <MenuIcon/>
                        </IconButton>
                    </Hidden>
                    <h2 className="Logo">Locatec</h2>
                    <Hidden smDown >
                        <div className="Options">
                            <Typography variant="h6" className="NavIcon Active First">
                                Inicio
                            </Typography>
                            <Typography variant="h6" className="NavIcon">
                                Catálogo de objetos
                            </Typography>
                            <Typography variant="h6" className="NavIcon Last">
                                Registro de objeto
                            </Typography>
                        </div>
                    </Hidden>
                </Toolbar>
            </AppBar>
            <SwipeableDrawer variant="temporary" open={this.state.drawerIsOpen} onClose={this.onClose} onOpen={this.onOpen}>
                <div className="DraweMainDiv">
                <List>
                    <ListItem button>
                        <ListItemIcon>
                            <HomeIcon></HomeIcon>
                        </ListItemIcon>
                        <ListItemText>
                            Inicio
                        </ListItemText>
                    </ListItem>
                    <ListItem button>
                        <ListItemIcon>
                            <ListIcon></ListIcon>
                        </ListItemIcon>
                        <ListItemText>
                            Catálogo de productos
                        </ListItemText>
                    </ListItem>
                    <ListItem button>
                        <ListItemIcon>
                            <CreateIcon></CreateIcon>
                        </ListItemIcon>
                        <ListItemText>
                            Registrar objeto
                        </ListItemText>
                    </ListItem>
                </List>
                </div>
            </SwipeableDrawer>
        </div>
        
    )
  }
}

export default NavBar;
