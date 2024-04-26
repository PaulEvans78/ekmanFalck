import React from "react";
import styled from "styled-components";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer"; 
import Home from "./pages/Home";
import FilmProduction from "./pages/FilmProduction";
import ProductionService from "./pages/ProductionService";
import About from "./pages/About";
import PlayerModal from './components/PlayerModal/player/Player';



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
`;



function App() {
  
  
  return (
    <HashRouter>
      
        

          <GridContainer >

              <Navbar />
          
                {/* <MainContainer> */}

              
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

                  </Switch>

                   
                      <PlayerModal/>
                    

              <Footer />
                    
          </GridContainer>
          
      
          
      
          
      </HashRouter>
  );
}

export default App;
