import React, {Component} from 'react';
import { LocatecContext } from '../Context/LocatecContext';
import '../Style/Catalog.css'
import NavBar from './NavBar'
import ObjectCard from './ObjectCard'
import axios from 'axios';
import { Input, InputAdornment, Grid } from '@material-ui/core';
import { withRouter } from 'react-router-dom';




class Catalog extends Component{
  //Consumir Context el cual se pasó en Appp.js.
  static contextType = LocatecContext;

  constructor(props){
    super(props);
    this.state = {
        objectsArray: [],
        displayArray: [],
        placesArray: [],
        searchValue: ""
    };
  }

  componentWillMount() {
    //Usar Contexto definido, en este caso static contextType = LocatecContext;
     //console.log(LocatecContext.Locatec);
    const LocatecContext = this.context;
    this.getAllObjects();
    this.getAllPlaces();
    if(this.props.location.state){
        this.setState({searchValue: this.props.location.state.search})
        this.filterObjectsByName();
    }
  }

  getAllObjects(){
    axios.get('https://b9gaqag9bb.execute-api.us-east-1.amazonaws.com/AllObjects')
    .then(response => {
    this.setState({objectsArray: response.data});
    this.setState({displayArray: response.data});
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


  filterObjectsByName(){
      const word = this.state.searchValue;
      this.state.displayArray= this.state.objectsArray.filter(object => object.name.toLowerCase().includes(word));
  }

  mapObjectsInFront(){
    const lostObjects= this.state.displayArray.map((result)=>
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
        this.filterObjectsByName();
        const listObjects = this.mapObjectsInFront();
        console.log(listObjects);
        if(this.state.projectsArray===[]){
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
                                            <br/>
                                            <Input 
                                                className="FilterInput"
                                                placeholder={"¿Que estas bsucando?"}
                                                defaultValue={this.state.searchValue}
                                                onChange={event=>{
                                                    const {value}=event.target;
                                                    this.setState({searchValue: value})
                                                }}/>
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


export default withRouter(Catalog)


