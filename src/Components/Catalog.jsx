import React, {Component} from 'react';
import { LocatecContext } from '../Context/LocatecContext';
import '../Style/Catalog.css'
import Grid from '@material-ui/core/Grid';
import NavBar from './NavBar'
import ObjectCard from './ObjectCard'
import OrderObjects from './OrderObjects'
import axios from 'axios';




class Catalog extends Component{
  //Consumir Context el cual se pasó en Appp.js.
  static contextType = LocatecContext;

  constructor(props){
    super(props);
    this.state = {
        objectsArray: [],
        placesArray: []
    };
  }

  componentWillMount() {
    //Usar Contexto definido, en este caso static contextType = LocatecContext;
     //console.log(LocatecContext.Locatec);
    const LocatecContext = this.context;
    this.getAllObjects();
    this.getAllPlaces();
  }

  getAllObjects(){
    axios.get('https://b9gaqag9bb.execute-api.us-east-1.amazonaws.com/AllObjects')
    .then(response => {
    this.setState({objectsArray: response.data});
    console.log(this.state.objectsArray);
    })
    .catch(error => {
    console.log(error)
    })
  }

  getAllPlaces(){
    axios.get('https://b9gaqag9bb.execute-api.us-east-1.amazonaws.com/AllPlaces')
    .then(response => {
    this.setState({placesArray: response.data});
    console.log(this.state.placesArray);
    })
    .catch(error => {
    console.log(error)
    })
  }

  mapObjectsInFront(){
    const lostObjects = this.state.objectsArray.map((result)=>
        result
    );
  
    var objectsDivs = []
    lostObjects.forEach(lostObject => {
        const place = this.state.placesArray.find(place => place.id === lostObject.lugar_id);
        if(place !== undefined && lostObject !== undefined){
            console.log(place)
            console.log(lostObject)
            objectsDivs.push(
                <Grid item key={lostObject.id} size="3" className="CardContainer">
                    <ObjectCard data={lostObject} place={place}>
                    </ObjectCard>
                </Grid>
            )
        }
    });
    return objectsDivs;

}

    render() {
        const listObjects = this.mapObjectsInFront()
        if(this.state.objectsArray===[]){
            return(
                <div></div>
            );
        }
        else{
            return (
                <Grid container>
                <NavBar active="Catalog"></NavBar>
                    <Grid container className="CatalogMainContainer">
                        <Grid item sm={10} className="CatalogContainerSecond">
                            <Grid container className="CatalogContainerSecond">
                                <Grid container>
                                    <Grid container>
                                        <Grid item sm={12} className="FilterContainer">
                                            <OrderObjects>
                                            </OrderObjects>
                                            <br/>
                                            <br/>
                                        </Grid>
                                    </Grid>
                                    <Grid container>
                                        <Grid item sm={12}>
                                            <Grid container className="CardContainerMain">
                                                {listObjects}
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
                
            )
        }
    }
}

export default Catalog;
