import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { LocatecContext, LocatecData } from './Context/LocatecContext';
import './Style/Global.css'



const Home = (
  lazy(() => (
    import('./Components/Home')
  ))
)

class App extends React.Component{
  constructor(props){
    super(props);

    this.getObjects = () => {
      //Obtener todos los objetos con la función lambda
      console.log("Hola");
    };

    this.state = {
      Locatec: LocatecData,
      getObjects: this.getObjects
    }
  }

  componentDidMount() {
    this.state.getObjects();
  }

  render(){
    return (
      //Context accesible a todos los componententes hijos, usar static contextType = LocatecContext
      <LocatecContext.Provider value={this.state}>
        <div className="App">
          <Suspense fallback={<div>Loading...</div>}>
            <Router>
              <Switch>
                <Route exactpath="/Home">
                  <Home/>
                </Route>
              </Switch>
            </Router>
          </Suspense>
        </div>
      </LocatecContext.Provider>
    
    );
  }
}

export default App;