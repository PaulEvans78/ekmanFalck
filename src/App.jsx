import React from "react";
import styled from "styled-components";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer"; 
import Home from "./pages/Home";
import FilmOne from "./pages/FilmOne";
import FilmTwo from "./pages/FilmTwo";
import FilmThree from "./pages/FilmThree";
import FilmProduction from "./pages/FilmProduction";
import ProductionService from "./pages/ProductionService";
import About from "./pages/About";




// import {

//   BrowserRouter as Routes,
//   Route,
// } from "react-router-dom";

import {
  HashRouter,
  // BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";


const GridContainer = styled.div`
overflow-x: hidden;
min-height: 100%;
max-width: 100vw;
display: grid;
grid-template-rows: 7rem repeat(2, 1fr) 7rem;
grid-template-columns: repeat(3, 1fr);
grid-template-areas:
"top top top"
"main main main"
"main main main"
"footer footer footer";

@media screen and (max-width: 960px) {
  /* grid-template-rows: repeat(2, 1fr); */
  grid-template-columns: repeat(2, 1fr);
  grid-template-areas:
  "top top"
  "main main"
  "main main"
  "footer footer";
          
    }

    @media screen and (max-width: 767px) {
      grid-template-rows: Auto;
      grid-template-columns: 1fr;
      grid-template-areas:
      "top"
      "main"
      "main"
      "footer";
    }
`;



function App() {
  
  
  return (
    <HashRouter>
      
        

          <GridContainer >

              <Navbar />
                        
                  <Switch>

                    <Route exact path="/">
                      <Home />
                    </Route>

                    <Route path="/filmProduction">
                      <FilmProduction />
                    </Route>

                     <Route path="/productionService">
                      <ProductionService />
                    </Route>

                    <Route path="/about">
                      <About />
                    </Route> 

                    <Route path="/filmOne">
                      <FilmOne />
                    </Route>

                    <Route path="/filmTwo">
                      <FilmTwo />
                    </Route>

                    <Route path="/filmThree">
                      <FilmThree />
                    </Route>
                      
                  </Switch>

                  

              <Footer />
                    
          </GridContainer>
          
      
          
      
          
      </HashRouter>
  );
}

export default App;
