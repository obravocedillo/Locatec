import React, {Component} from 'react';
import { LocatecContext } from '../Context/LocatecContext';
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
      <Grid container>
        <NavBar></NavBar>
      </Grid>
    )
  }
}

export default Home;
