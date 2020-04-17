import React, {Component} from 'react';
import { LocatecContext } from '../Context/LocatecContext';
import '../Style/Home.css'
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
    const LocatecContext = this.context
    console.log(LocatecContext.Locatec);
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
    const lostObjects= this.state.objectsArray.map((result)=>
        result
    );
    //console.log(lostObjects);
    var objectsDivs = []
    const places=this.state.placesArray;
    
    lostObjects.forEach(lostObject => {
        //console.log(lostObject)
        const place = places.find(place => place.id == lostObject.lugar_id);
        console.log(place)
        objectsDivs.push(
            <Grid item key={lostObject.id}>
                <ObjectCard data={lostObject} place={place}>
                </ObjectCard>
            </Grid>
        )
    });
    return (
        objectsDivs
    )
    
  }

    render() {
        const listObjects = this.mapObjectsInFront()
        console.log(listObjects)
        if(this.state.projectsArray===[]){
            return(
                <div></div>
            );
        }
        else{
            return (
                <Grid container>
                    <NavBar></NavBar>
                    <Grid container xl={12} spacing={2}>
                        <Grid item xl={1}>
                        </Grid>
                        <Grid item xl={11}>
                            <Grid container spacing={2} xl={11}>
                                <Grid container xl={12}>
                                    <Grid container xl={12}>
                                        <Grid item>
                                            <OrderObjects>
                                            </OrderObjects>
                                            <br/>
                                            <br/>
                                        </Grid>
                                    </Grid>
                                    <Grid container xl={12}>
                                        <Grid item>
                                            <Grid container justify="left" spacing={1}>
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
