import React, { lazy, Suspense } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import { LocatecContext, LocatecData } from "./Context/LocatecContext";
import "./Style/Global.css";

const Home = lazy(() => import("./Components/Home"));
const Catalog = lazy(() => import("./Components/Catalog"));
const Details = lazy(() => import("./Components/Details"));
const Register = lazy(() => import("./Components/RegisterObject"))

class App extends React.Component {
  constructor(props) {
    super(props);

    this.getObjects = () => {
      //Obtener todos los objetos con la función lambda
      console.log("Hola");
    };

    this.state = {
      Locatec: LocatecData,
      getObjects: this.getObjects,
    };
  }

  componentDidMount() {
    this.state.getObjects();
  }

  render() {
    return (
      //Context accesible a todos los componententes hijos, usar static contextType = LocatecContext
      <LocatecContext.Provider value={this.state}>
        <div className="App">
          <Suspense fallback={<div>Loading...</div>}>
            <Router>
              <Switch>
                <Route path="/Home">
                  <Home />
                </Route>
                <Route path="/Catalog">
                  <Catalog />
                </Route>
                <Route path="/Details">
<<<<<<< HEAD
                  <Details/>
                </Route>
                <Route path="/Register">
                  <RegisterObject />
=======
                  <Details />
                </Route>
                <Route path="/Register">
                  <Register />
>>>>>>> Bucket
                </Route>
                <Redirect to="/Home" />
              </Switch>
            </Router>
          </Suspense>
        </div>
      </LocatecContext.Provider>
    );
  }
}
export default App;
