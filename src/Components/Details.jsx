import React, {Component} from 'react';
import { LocatecContext } from '../Context/LocatecContext';
import '../Style/Home.css'
import Grid from '@material-ui/core/Grid';
import NavBar from './NavBar';
import ProductDescription from './ProductDescription'




class Catalog extends Component{
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
            <NavBar xl={12}></NavBar>
            <Grid item xl={12}>
              <br/>
              <br/>
              <br/>
              <br/>
            </Grid>
            <Grid container spacing={2}>
                <Grid item xl={2}>
                </Grid>
                <Grid container spacing={2} xl={10}>
                    <ProductDescription>
                        
                    </ProductDescription>
                </Grid>
            </Grid>
        </Grid>
        
    )
  }
}

export default Catalog;
