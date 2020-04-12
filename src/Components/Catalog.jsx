import React, {Component} from 'react';
import { LocatecContext } from '../Context/LocatecContext';
import '../Style/Home.css'
import Grid from '@material-ui/core/Grid';
import NavBar from './NavBar'
import ObjectCard from './ObjectCard'
import OrderObjects from './OrderObjects'




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
            <NavBar active="Catalog"></NavBar>
            <Grid container spacing={2}>
                <Grid item xl={1}>
                </Grid>
                <Grid container spacing={2} xl={11}>
                    <Grid item>
                        <OrderObjects>

                        </OrderObjects>
                    </Grid>
                    <Grid item>
                        <Grid container justify="left" spacing={1}>
                            <Grid item>
                                <ObjectCard>
                                </ObjectCard>
                            </Grid>
                            <Grid item>
                                <ObjectCard>
                                </ObjectCard>
                            </Grid>
                            <Grid item>
                                <ObjectCard>
                                </ObjectCard>
                            </Grid>
                            <Grid item>
                                <ObjectCard>
                                </ObjectCard>
                            </Grid>
                            <Grid item>
                                <ObjectCard>
                                </ObjectCard>
                            </Grid>
                            <Grid item>
                                <ObjectCard>
                                </ObjectCard>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
        
    )
  }
}

export default Catalog;
