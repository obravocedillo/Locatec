import React, {Component} from 'react';
import { LocatecContext } from '../Context/LocatecContext';
import '../Style/Home.css'
import Grid from '@material-ui/core/Grid';
import { withRouter } from 'react-router-dom';
import NavBar from './NavBar'
import ProductDescription from './ProductDescription'



class Catalog extends Component{
  //Consumir Context el cual se pasó en Appp.js.
  static contextType = LocatecContext;

  constructor(props){
    super(props);
    this.state = {
      Details: {}    
    };
  }

  componentDidMount() {
    //Usar Contexto definido, en este caso static contextType = LocatecContext;
    const LocatecContext = this.context
    console.log(this.props.location);
    this.state.Details=this.props.location.state

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
          <Grid container className="DescriptionContainer DescriptionContainerMain">
              <Grid container className="DescriptionContainer">
                <ProductDescription name={this.props.location.state}>
                </ProductDescription>
              </Grid>
          </Grid>
        </Grid>
    )
  }
}


export default withRouter(Catalog)
